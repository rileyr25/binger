import './styles/style.scss';
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
