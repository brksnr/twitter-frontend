import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { TweetDetail } from './components/TweetDetail'


function App() {

  return (
    <>
      <Router>
          <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/tweet/:tweetId" component={TweetDetail} />
          </Switch>
      </Router>
    </>
  )
}

export default App
