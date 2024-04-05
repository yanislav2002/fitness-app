import AddExerciseCSS from './AddExercise.module.css';
import FilterCSS from './Filter.module.css';

import axios from 'axios';
import ExerciseItem from '../ExerciseItem/ExerciseItem';
import { useEffect, useState } from 'react';
import { Exercise } from '../../interfaces/Exercise';
import { MuscleGroup } from '../../interfaces/MuscleGroup';
import { Category } from '../../interfaces/Category';
 

const AddExercise: React.FC = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [filterExercises, setFilterExercises] = useState<Exercise[]>([]);
    const [searchExercises, setSearchExercises] = useState<Exercise[]>([]);

    const [category, setCategory] = useState<Category[]>([]);
    const [searchCategory, setSearchCategory] = useState<string>('');

    const [muscleGroup, setMuscleGroup] = useState<MuscleGroup[]>([]);
    const [searchMuscleGroup, setSearchMuscleGroup] = useState<string>('');

    const [searchExerciseName, setSearchExerciseName] = useState<string>('');

    useEffect(() => {
        const fetchAllExercises = async () => {
            try {
                const res = await axios.get('http://localhost:9009/create-workout');

                setExercises(res.data.exercises);
                setCategory(res.data.category);
                setMuscleGroup(res.data.muscleGroup);
            } catch (error) {
                console.log(error);
            } 
        };

        fetchAllExercises();
    }, []);

    useEffect(() => {
        setFilterExercises(exercises);
    }, [exercises]);

    useEffect(() => {
        setSearchExercises(filterExercises);
    }, [filterExercises]);

    useEffect(() => {
        const lengthOfSearchExerciseByName = searchExerciseName.length;

        if (lengthOfSearchExerciseByName >= 3) {
            setSearchExercises(filterExercises.filter((exercise: Exercise) => {
                const words = exercise.EXERCISE_NAME.toLowerCase().split(' ');
                let slicedWords: string[] = [];

                words.forEach((word) => {
                    if (word.length >= lengthOfSearchExerciseByName) {
                        slicedWords.push(word.slice(0, lengthOfSearchExerciseByName))
                    }
                })

                return slicedWords.includes(searchExerciseName.toLowerCase());
            }))
        } else {
            setSearchExercises(filterExercises);
        }

    }, [searchExerciseName, filterExercises])

    useEffect(() => {
        if (searchCategory === '' && searchMuscleGroup === '') {
            setFilterExercises(exercises);
        } else {
            setFilterExercises(exercises.filter((exercise: Exercise) => {
                if (searchCategory !== '' && searchMuscleGroup !== '') {
                    return exercise.CATEGORY_NAME === searchCategory && exercise.MUSCLE_NAME === searchMuscleGroup;
                } else if (searchCategory !== '') {
                    return exercise.CATEGORY_NAME === searchCategory;
                } else {
                    return exercise.MUSCLE_NAME === searchMuscleGroup;
                }
            }));
        }
    }, [searchCategory, searchMuscleGroup, exercises]);

    const handleMuscleGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchMuscleGroup(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchCategory(event.target.value);
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchExerciseName(event.target.value);
    };

    return (
        <aside>
            <section className={FilterCSS.filter}>
                <h3>Add exercise</h3>
                <div className={FilterCSS.selects}>
                    <select onChange={handleMuscleGroupChange} defaultValue=''>
                        <option value=''>Any muscle</option>
                        {muscleGroup.map((muscle: MuscleGroup) => (
                            <option key={muscle.ID} value={muscle.MUSCLE_NAME}>{muscle.MUSCLE_NAME}</option>
                        ))}
                    </select>
                    <select onChange={handleCategoryChange} defaultValue=''>
                        <option value=''>Any category</option>
                        {category.map((categ: Category) => (
                            <option key={categ.ID} value={categ.CATEGORY_NAME}>{categ.CATEGORY_NAME}</option>
                        ))}
                    </select>
                </div>
                <input type="text" placeholder='exercise name' onChange={handleSearch} />
            </section>
            <section className={AddExerciseCSS.exerciseList}>
                {searchExercises.map((exercise: Exercise) => (
                    <ExerciseItem key={exercise.ID} {...exercise} />
                ))}
            </section>
        </aside>
    );
}

export default AddExercise;