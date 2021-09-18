import './styles/style.scss'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import Nav from './components/Nav'
import Home from './components/Home'
import Favourites from './components/Favourites'
import About from './components/About'
import SinglePage from './components/SinglePage'
import SearchPage from './components/SearchPage'
import PageNotFound from './components/PageNotFound'


function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Nav />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/single-movie/:id' component={SinglePage}/>
            <Route path='/favourites' component={Favourites}/>
            <Route path='/search' component={SearchPage}/>
            <Route path='/about' component={About}/>
            <Route component={PageNotFound}/>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
