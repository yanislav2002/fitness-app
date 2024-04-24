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

    const categoryQuery = `
        SELECT * 
        FROM category
    `;

    const category = await getData(categoryQuery);

    const muscleGroupQuery = `
        SELECT * 
        FROM muscle_group
    `;

    const muscleGroup = await getData(muscleGroupQuery);

    res.json({exercises: exercises, category: category, muscleGroup: muscleGroup});
});

router.get('/plan', async (req, res) => {
    const query = `
        SELECT *
        FROM plan
    `;

    const plan = await getData(query);

    res.json(plan)
});

router.post('/plan', async (req, res) => {

    const { planName, userId } = req.body;
    
    const planQuery = 'INSERT INTO plan VALUES (:id, :plan_name, :user_id)';

    const planValues = {
        id: { val: null },
        plan_name: { val: planName },
        user_id: { val: userId },
    };

    try {
        const plan = await postData(planQuery, planValues);
        return res.json(plan);

    } catch (error) {
        res.status(500).json( 'Error inserting user data');
    }
});

router.post('/current-exercise', async (req, res) => {
    const { currentExerciseArray, planId } = req.body;
    const currentExerciseQuery = 'INSERT INTO curr_exercise VALUES (:id, :sets, :reps, :weigth, :plan_id, :exercise_info_id)';
    
    try {
        let plan;

        for (const currExercise of currentExerciseArray) {
            const currentExerciseValues = {
                id: { val: null },
                sets: { val: currExercise.SETS },
                reps: { val: currExercise.REPS },
                weigth: { val: currExercise.WEIGTH },
                plan_id: { val: planId },
                exercise_info_id: { val: currExercise.EXERCISE_INFO_ID },
            };

            plan = await postData(currentExerciseQuery, currentExerciseValues);
        }

        return res.json(plan);
    } catch (error) {
        console.error('Error inserting current exercise data:', error);
        return res.status(500).json('Error inserting current exercise data');
    }
});
export default router;