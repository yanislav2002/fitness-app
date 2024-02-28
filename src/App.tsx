import './App.css';
import RegisterForm from './components/forms/RegisterForm/RegisterForm';
import LoginForm from './components/forms/LoginForm/LoginForm';
import Navigation from './components/Navigation/Navigation';

function App(): JSX.Element {
  return (
    <div className="App">
      
      <Navigation />

      <main>
        <section className="home-title">
          <div className="photo"></div>
          
          <h1>Create Workout Plan</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ullam ducimus eligendi incidunt odit non debitis, suscipit veritatis dolorum illo dolore!
          </p>
          <p><a href="#" className='link'>Create Plan</a></p>
          
        </section>  

        <RegisterForm />
        <LoginForm /> 

      </main>
    </div>
  );
}

export default App;
