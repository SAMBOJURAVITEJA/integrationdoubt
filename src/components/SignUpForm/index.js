import {Component} from 'react'
import Header from '../Header'

import './index.css'

class SignUpForm extends Component {
  state = {
    username: '',
    password: '',
    location: '',
    phoneNumber: '',
    gender: '',
    education: '',
  }

  onChangePhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeEducation = event => {
    this.setState({education: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {
      username,
      password,
      location,
      gender,
      education,
      phoneNumber,
    } = this.state
    const userDetails = {
      username,
      password,
      gender,
      location,
      education,
      phoneNumber,
    }
    const url = 'https://apis.ccbp.in/register'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const {history} = this.props
      history.push('/signIn')
    }
  }

  renderGender = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          GENDER
        </label>
        <select onChange={this.onChangeGender} value={gender}>
          <option value="FEMALE">FEMALE</option>
          <option value="MALE">MALE</option>
        </select>
      </>
    )
  }

  renderPhoneNumber = () => {
    const {phoneNumber} = this.state

    return (
      <>
        <label className="input-label" htmlFor="phoneNumber">
          PHONE NUMBER
        </label>
        <input
          type="text"
          className="phoneNumber-input-field"
          placeholder="PhoneNumber"
          onChange={this.onChangePhoneNumber}
          id="phoneNumber"
          value={phoneNumber}
        />
      </>
    )
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

  renderEducationQualification = () => {
    const {education} = this.state
    return (
      <>
        <label className="input-label" htmlFor="educationQualification">
          EDUCATION
        </label>
        <select
          value={education}
          id="educationQualification"
          onChange={this.changeEducation}
        >
          <option value="B.TECH/B.E">B.TECH/B.E</option>
          <option value="OtherDegree">OtherDegree</option>
        </select>
      </>
    )
  }

  renderLocationDetails = () => {
    const {Location} = this.state
    return (
      <>
        <label className="input-label" htmlFor="location">
          LOCATION
        </label>
        <input
          type="text"
          id="location"
          className="location-input-field"
          value={Location}
          onChange={this.onChangeUsername}
          placeholder="Location"
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
            <div className="input-container">{this.renderPhoneNumber()}</div>
            <div className="input-container">{this.renderGender()}</div>
            <div className="input-container">
              {this.renderEducationQualification()}
            </div>
            <div className="input-container">
              {this.renderLocationDetails()}
            </div>
            <button type="submit" className="login-button">
              SignUp
            </button>
          </form>
        </div>
      </>
    )
  }
}

export default SignUpForm
