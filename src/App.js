import './styles/style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Favourites from './components/Favourites'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/favourites' component={Favourites}/>
          <Route path='/about' component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
