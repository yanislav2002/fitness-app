import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import RegisterForm from './components/forms/RegisterForm/RegisterForm';
import LoginForm from './components/forms/LoginForm/LoginForm';
import HomePage from './components/pages/HomePage/HomePage';
import CreateWorkoutPage from './components/pages/CreateWorkoutPage/CreateWorkoutPage';


export default function App(): JSX.Element {
    return (
        <div className="App">

            <Navigation />

            <main>
                <HomePage />
                {/* <CreateWorkoutPage /> */}

                {/* <RegisterForm /> */}
                {/* <LoginForm />  */}

            </main>

            <Footer />

        </div>
    );
}
