import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, Redirect} from 'react-router-dom'

import 'reactjs-popup/dist/index.css'

import './index.css'

class SignInForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log(JSON.stringify(userDetails))
    const url = 'https://railway-production-c6e6.up.railway.app/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(JSON.stringify(userDetails), response, 'signUp', data)
    if (response.ok) {
      this.onSubmitSuccess(data.username)
    } else if (response.ok === false) {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1687359765/logo_uo5ias.png"
              className="login-website-logo-desktop-img"
              alt="website logo"
            />
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <div className="buttons-container">
              <button type="submit" className="login-button">
                SignIn
              </button>
              <Link class="link" to="/signUp">
                <button type="button" className="login-button btn">
                  SignUp
                </button>
              </Link>
            </div>
            <Link to="/forgot-password">
              <button type="button" className="forgotPassword">
                ResetPassword
              </button>
            </Link>
          </form>
        </div>
      </>
    )
  }
}

export default SignInForm
