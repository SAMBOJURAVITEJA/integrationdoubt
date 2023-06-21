import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import Header from '../Header'

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
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
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

    return (
      <>
        <Header />
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <img
              src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1687359765/logo_uo5ias.png"
              className="login-website-logo-desktop-img"
              alt="website logo"
            />
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
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
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            <Popup
              modal
              trigger={
                <button type="button" className="forgotPassword">
                  ForgotPassword
                </button>
              }
            >
              {close => (
                <>
                  <div>
                    <p>
                      username: rahul <br />
                      password:rahul@2021
                      <br />
                      <br />
                      Username: david <br />
                      password: the_miller@23
                      <br />
                      <br />
                      Username: robert
                      <br /> password: WilsonRobert45
                      <br />
                      <br />
                      Username:henry <br />
                      password: henry_the_developer
                      <br />
                      <br />
                      Username: mosh
                      <br />
                      password: DevMosh22
                      <br />
                      <br />
                      Username: praneetha
                      <br />
                      password: praneetha@2021
                    </p>
                  </div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </>
              )}
            </Popup>
          </form>
        </div>
      </>
    )
  }
}

export default SignInForm
