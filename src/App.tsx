import './App.css';

import PATHS from './paths';
import { Routes, Route } from 'react-router-dom'; 

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/forms/RegisterForm/RegisterForm';
import LoginForm from './components/forms/LoginForm/LoginForm';
import HomePage from './components/pages/HomePage/HomePage';
import CreateWorkoutPage from './components/pages/CreateWorkoutPage/CreateWorkoutPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import PlayedWorkoutPage from './components/pages/PlayedWourkoutPage/PlayedWorkoutPage';
import Error404 from './components/Error404/Error404';

export default function App(): JSX.Element {
    return (
        <div className="App">

            <Navigation />

            <main>
                <Routes>
                    <Route path={PATHS.home} element={<HomePage />}></Route>
                    <Route path={PATHS.createWorkout} element={<CreateWorkoutPage />}></Route>
                    <Route path={PATHS.profile} element={<ProfilePage />}></Route>
                    <Route path={PATHS.playedWorkout} element={<PlayedWorkoutPage />}></Route>
                    <Route path={PATHS.error404} element={<Error404 />}></Route>

                    <Route path={PATHS.register} element={<RegisterForm />}></Route>
                    <Route path={PATHS.login} element={<LoginForm />}></Route>
                </Routes>
            </main>

            <Footer />

        </div>
    );
}
