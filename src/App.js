
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { AppCars } from './pages/AppCars';
import { AddCar } from './pages/AddCar';
function App() {
  return (
    <div>
      <BrowserRouter> 
      <nav> 
        <ul>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/cars">
        <AppCars/>
        </Route>
        <Route  path="/add">
        <AddCar/>
        </Route>
        <Route  path="/edit/:id">
        <AddCar/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;