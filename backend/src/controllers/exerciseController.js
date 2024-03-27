import { Router } from 'express';
import { getData, postData } from '../database/database-operations.js';


const router = Router();

router.get('/', async (req, res) => {
    const query = `
        SELECT exercise_info.ID, exercise_info.EXERCISE_NAME, exercise_info.IMAGE, exercise_info.DESCRIPTION, category.CATEGORY_NAME, muscle_group.MUSCLE_NAME 
        FROM exercise_info
        JOIN category ON exercise_info.CATEGORY_ID = category.ID
        JOIN muscle_group ON exercise_info.MUSCLE_GROUP_ID = muscle_group.ID
    `;

    const exercises = await getData(query);
    console.log(exercises);
    res.json(exercises);
});

router.post('/', async (req, res) => {
    const query = 'INSERT INTO exercise_info VALUES (:id, :exercise_name, :image, :description, :muscle_group_id, :category_id)';

    const values = {
        id: null,
        exercise_name: { val: 'testexname2' },
        image: { val: 'testimg2' },
        description: { val: null },
        muscle_group_id: { val: 2 },
        category_id: { val: 2 }
    };

    try {
        const result = await postData(query, values);
        res.json(result);
        console.log(result);

    } catch (error) {
        res.json({ error });
        console.log(error);
    }
});

export default router;