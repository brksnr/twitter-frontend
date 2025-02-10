import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Register } from './pages/Register'


function App() {

  return (
    <>
      <Router>
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/register" component={Register} />
          </Switch>
      </Router>
    </>
  )
}

export default App
