import React from 'react';
import CreateWorkoutPageCSS from './CreateWorkoutPage.module.css';
import CreateWorkoutForm from '../../forms/CreateWorkoutForm/CreateWorkoutForm';
import AddExercise from '../../AddExercise/AddExercise';
import { ExerciseProvider } from '../../../contexts/exerciseProvider';


const CreateWorkoutPage: React.FC = () => {
    return (
        <div className={CreateWorkoutPageCSS.pageBody}>
            <ExerciseProvider>

                <CreateWorkoutForm />

                <AddExercise />
                
            </ExerciseProvider>
        </div>
    );
}

export default CreateWorkoutPage;
