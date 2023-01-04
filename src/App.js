import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { AppCars } from './pages/AppCars';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
