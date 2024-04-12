import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../contexts/authProvider";
import { useNavigate } from "react-router";
import PATHS from "../../../paths";


const UserDetailsForm: React.FC = () => {
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();    

    const [userInfo, setUserInfo] = useState<any>({
        email: '',
        username: '',
        name: '',
        lastName: '',
        photo: ''
    });

    useEffect(() => {
        fetchHandler();
    }, []);

    useEffect(() => {
        console.log(userInfo);
        
    }, [userInfo]);


    const fetchHandler = async () => {
        try {
            const response = await axios.get('http://localhost:9009/users/details', {
                params: {
                    userId: userId
                }
            });

            const userData = response.data[0];
            console.log(userData);
            

            setUserInfo({
                email: userData.EMAIL || '',
                username: userData.USER_NAME || '',
                name: userData.NAME || '',
                lastName: userData.LAST_NAME || '',
                photo: userData.USER_PHOTO || ''
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put('http://localhost:9009/users/details',  {userInfo, userId}); // stringify userInfo here

            console.log(userInfo);

            navigate(PATHS.profile);
        } catch (error) {
            console.error('Error updating details:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Details</h2>

            <input 
                placeholder='email'
                type='email'
                name='email'
                value={userInfo.email}
                onChange={handleChange}
            />

            <input 
                placeholder='username'
                type='text' 
                name='username'
                value={userInfo.username}
                onChange={handleChange}
            />

            <input 
                placeholder='name'
                type='text' 
                name='name'
                value={userInfo.name}
                onChange={handleChange}
            />

            <input 
                placeholder='last name'
                type='text'
                name='lastName'
                value={userInfo.lastName}
                onChange={handleChange}
            />

            <input 
                placeholder='photo'
                type='text' 
                name='photo'
                value={userInfo.photo}
                onChange={handleChange}
            />

            <button type='submit'>Update Details</button>   
        </form>
    );
};

export default UserDetailsForm;
