import './App.css';
import RegisterForm from './components/forms/RegisterForm/RegisterForm';
import LoginForm from './components/forms/LoginForm/LoginForm';
import Navigation from './components/Navigation/Navigation';
import SummaryPanel from './components/SummaryPanel/SummaryPanel';
import CreateWorkoutPage from './components/pages/CreateWorkoutPage/CreateWorkoutPage';


export default function App(): JSX.Element {
    return (
        <div className="App">

            <Navigation />

            <main>
                <CreateWorkoutPage />

                {/* <SummaryPanel /> */}

                {/* <RegisterForm /> */}
                {/* <LoginForm />  */}

            </main>


        </div>
    );
}
