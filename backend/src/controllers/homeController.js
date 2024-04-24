import { Router } from 'express';
import { deleteData, getData, postData } from '../database/database-operations.js';


const router = Router();

router.get('/', (req, res) => {
    res.json('Hello from backend!');
});

router.get('/profile-page', async (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: 'userId is missing' });
    }

    const planQuery = `
        SELECT * 
        FROM plan
        WHERE user_id = '${userId}'
    `;

    const statisticsQuery = `
        SELECT * 
        FROM statistics
        WHERE user_id = '${userId}'
    `;

    const userInfoQuery = `
        SELECT user_data.id, email, password, user_name, name, last_name, user_photo
        FROM user_data
        JOIN user_details on user_data.id = user_details.user_id
        WHERE user_data.id = '${userId}'
    `

    try {
        const plans = await getData(planQuery);
        const statistics = await getData(statisticsQuery);
        const userInfo = await getData(userInfoQuery);

        res.json({plans, statistics, userInfo}); 
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});

router.get('/played-workout', async (req, res) => {
    const planId = req.query.id;

    const exercisesQuery = `
        SELECT curr_exercise.id, sets, reps, weigth, exercise_name, image, muscle_name, category_name, plan_name
        FROM curr_exercise
        JOIN exercise_info ON curr_exercise.exercise_info_id = exercise_info.id
        JOIN category ON exercise_info.CATEGORY_ID = category.ID
        JOIN muscle_group ON exercise_info.MUSCLE_GROUP_ID = muscle_group.ID
        JOIN plan on curr_exercise.plan_id = plan.id
        WHERE plan_id = '${planId}'
    `

    try {
        const exercises = await getData(exercisesQuery);
        res.json(exercises);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }

});

router.post('/played-workout', async (req, res) => {
    const { timer, numberOfExercises, formattedDate, userId, planName } = req.body;

    const query = `
        INSERT 
        INTO statistics VALUES (:id, :plan_name, :date_ex, :time_ex, :number_of_exercises, :user_id)
    `;

    const values = {
        id: { val: null },
        plan_name: { val: planName },
        date_ex: { val: formattedDate },
        time_ex: { val: timer },
        number_of_exercises: { val: numberOfExercises },
        user_id: { val: userId },
    }

    try {
        const statistic = await postData(query, values);
        
        console.log(statistic);
        return res.json(statistic);


    } catch (error) {
        res.status(500).json( 'Error inserting user data');
    }
});

router.delete('/profile-page/plans', async (req, res) => {
    const { id } = req.query;

    console.log(id);

    if (!id) {
        return res.status(400).json({ error: 'Plan ID is missing' });
    }

    const deletePlanQuery = `
        DELETE 
        FROM plan
        WHERE id = '${id}'
    `;

    const deleteExercisesQuery = `
        DELETE
        FROM curr_exercise
        WHERE plan_id = '${id}'
    `

    try {
        await deleteData(deleteExercisesQuery);
        const result = await deleteData(deletePlanQuery);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Plan not found' });
        }
        res.json({ message: 'Plan deleted successfully' });
    } catch (error) {
        console.error('Error deleting plan:', error);
        res.status(500).json({ error: 'An error occurred while deleting the plan.' });
    }
});

router.delete('/profile-page/statistics', async (req, res) => {
    const { id } = req.query;

    console.log(id);

    if (!id) {
        return res.status(400).json({ error: 'Plan ID is missing' });
    }

    const deleteStatsQuery = `
        DELETE 
        FROM statistics
        WHERE id = '${id}'
    `;

    try {
        const result = await deleteData(deleteStatsQuery);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Plan not found' });
        }
        res.json({ message: 'Plan deleted successfully' });
    } catch (error) {
        console.error('Error deleting plan:', error);
        res.status(500).json({ error: 'An error occurred while deleting the plan.' });
    }
});

export default router;