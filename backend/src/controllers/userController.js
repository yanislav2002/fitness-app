import { Router } from 'express';
import generateUUID from '../utils/uuid-generator.js';
import { getData, postData } from '../database/database-operations.js';
import { generateHashFromPassword, comparePasswordWithHash } from '../utils/password-hasher.js';
import jwt from 'jsonwebtoken';


const router = Router();

router.get('/login', async (req, res) => {
    try {
        const query = `
            SELECT * 
            FROM user_data 
        `;

        const users = await getData(query);
        res.json(users);
 
    } catch (error) {
        res.status(500).json('An error occurred while checking username or email:', error);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json('Email and password are required');
    }

    try {
        const query = `
            SELECT * 
            FROM user_data 
            WHERE email = '${email}'
        `;

        const user = await getData(query);

        if (!user || user.length === 0) {
            return res.status(401).json('User not found');
        }

        const storedPasswordHash = user[0].PASSWORD; 
        const isPasswordValid = await comparePasswordWithHash(password, storedPasswordHash);

        if (!isPasswordValid) {
            return res.status(401).json('Invalid password');
        }

        const accessToken = jwt.sign({ email: user[0].email, userId: user[0].id }, 'your_secret_key', { expiresIn: '1h' });

        return res.status(200).json({ user: user[0], accessToken });

    } catch (error) {
        res.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
});

router.get('/register', async (req, res) => {

    try {
        const query = `
            SELECT * 
            FROM user_data 
        `;

        const users = await getData(query);
        res.json(users);

        const accessToken = jwt.sign({ email: user[0].email, userId: user[0].id }, 'your_secret_key', { expiresIn: '1h' });

        return res.status(200).json({ user: user[0], accessToken });
 
    } catch (error) {
        res.status(500).json('An error occurred while checking username or email:', error);
    }
});

router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json('Email, username, and password are required');
    }

    try {
        const usernameQuery = `
            SELECT * 
            FROM user_data 
            WHERE user_name = '${username}'
        `;

        const existingUsername = await getData(usernameQuery);

        if (existingUsername.length > 0) {
            return res.status(409).json('Username is already in use');
        }

        const emailQuery = `
            SELECT * 
            FROM user_data 
            WHERE email = '${email}'
        `;

        const existingEmail = await getData(emailQuery);

        if (existingEmail.length > 0) {
            return res.status(409).json('Email is already in use');
        }

        const uuid = generateUUID();
        const passwordHash = await generateHashFromPassword(password);
        console.log(passwordHash);
        const query = `INSERT INTO user_data VALUES (:id, :email, :password, :user_name)`;

        const values = {
            id: { val: uuid },
            email: { val: email },
            password: { val: passwordHash },
            user_name: { val: username }
        };

        const detailsQuery = `INSERT INTO user_details VALUES (:id, :name, :last_name, :user_photo, :user_id)`

        const detailsValues = {
            id: { val: null },
            name: { val: 'no' },
            last_name: { val: 'name' },
            user_photo: { val: 'no photo' },
            user_id: { val: uuid }
        };

        try {
            const result = await postData(query, values);
            await postData(detailsQuery, detailsValues);
            return res.json(result);

        } catch (error) {
            res.status(500).json( 'Error inserting user data');
        }

    } catch (error) {
        res.status(500).json('Error checking username or email availability');
    }
});

router.get('/details', async (req, res) => {
    const { userId } = req.query;

    const userInfoQuery = `
        SELECT user_data.id, email, user_name, name, last_name, user_photo
        FROM user_data
        JOIN user_details on user_data.id = user_details.user_id
        WHERE user_data.id = '${userId}'
    `
    const user = await getData(userInfoQuery);
    return res.json(user);
})

router.put('/details', async (req, res) => {
    const { userInfo, userId } = req.body;

    const updateUserDataQuery = `
        UPDATE user_data 
        SET email = :email, user_name = :username
        WHERE id = :userId
    `;

    const userDataValues = {
        email: userInfo.email,
        username: userInfo.username,
        userId: userId
    };

    const updateUserDetailsQuery = `
        UPDATE user_details 
        SET name = :name, last_name = :lastName, user_photo = :photo
        WHERE user_id = :userId
    `;

    const userDetailsvalues = {
        name: userInfo.name,
        lastName: userInfo.lastName,
        photo: userInfo.photo,
        userId: userId
    };

    try {
        await postData(updateUserDataQuery, userDataValues);
        await postData(updateUserDetailsQuery, userDetailsvalues);
        return res.json({ message: "User details updated successfully" });
    } catch (error) {
        console.error("Error updating user details:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default router;