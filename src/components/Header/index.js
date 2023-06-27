import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const LogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/signIn')
  }
  return (
    <ul className="headerContainer">
      <Link to="/" className="Link">
        <li>
          <img
            className="HeaderImg"
            alt=""
            src="https://res.cloudinary.com/dkajxnnlq/image/upload/v1687359765/logo_uo5ias.png"
          />
        </li>
      </Link>
      <li>
        <select className="headerSelect">
          <option>Reseller</option>
          <option>Polarion</option>
          <option>Mendix</option>
        </select>
      </li>
      <li>
        <select className="headerSelect">
          <option>Services</option>
          <option>Polarion ALM</option>
          <option>SAAS & Cloud Solutions</option>
          <option>PTC Integrity</option>
          <option>Mendix</option>
          <option>Training</option>
          <option>Hoisting</option>
        </select>
      </li>
      <li>
        <select className="headerSelect">
          <option>Integration</option>
          <option>Custom Plugins</option>
          <option>Templates</option>
        </select>
      </li>
      <li>
        <select className="headerSelect">
          <option>Support</option>
          <option>Technical Support</option>
          <option>Sales Support</option>
        </select>
      </li>
      <li>
        <select className="headerSelect">
          <option>Blogs</option>
        </select>
      </li>
      <li>
        <select className="headerSelect">
          <option>About Us</option>
          <option>Career</option>
          <options>Customers</options>
        </select>
      </li>
      <li>
        <select className="headerSelect">
          <option>Locations</option>
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
        </select>
      </li>
      <li>
        <button className="LogOutBtn" onClick={LogOut} type="button">
          LogOut
        </button>
      </li>
    </ul>
  )
}

export default withRouter(Header)
