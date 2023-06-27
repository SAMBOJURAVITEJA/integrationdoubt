import './App.css'

import {BrowserRouter, Redirect, Switch, Route} from 'react-router-dom'
import Forgot from './components/Forgot'

import ProtectedRoute from './components/ProtectedRoute/index'

import SignUpForm from './components/SignUpForm'

import SignInForm from './components/SignInForm'

import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signIn" component={SignInForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/signUp" component={SignUpForm} />
      <Route exact path="/not-found" component={NotFound} />
      <Route exact path="/forgot-password" component={Forgot} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
