import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class Forgot extends Component {
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

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    console.log('reset')
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://orridevudoy.onrender.com/forgotPassword'
    const options = {
      method: 'PUT',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess()
    } else if (response.ok === false) {
      this.onSubmitFailure(data.status)
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
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <Link to="/signIn">
              <img
                src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1687359765/logo_uo5ias.png"
                className="login-website-logo-desktop-img"
                alt="website logo"
              />
            </Link>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>

            <div className="buttons-container">
              <button type="submit" className="login-button">
                Reset
              </button>
            </div>
            {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default Forgot
