import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="app-header">
        <ul className='header-list'>
          <li><a href="#" className='navigation-link'>Home</a></li>
          <li><a href="#" className='navigation-link'>Login</a></li>
          <li><a href="#" className='navigation-link'>Sign in</a></li>
          <li><a href="#" className='navigation-link'>Logout</a></li>
        </ul>
      </header>

      <main>
        <section className="home-title">
          <div className="photo"></div>
          
          <h1>Create Workout Plan</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ullam ducimus eligendi incidunt odit non debitis, suscipit veritatis dolorum illo dolore!
          </p>
          <p><a href="#" className='link'>Create Plan</a></p>
          
        </section>  
      </main>
    </div>
  );
}

export default App;
