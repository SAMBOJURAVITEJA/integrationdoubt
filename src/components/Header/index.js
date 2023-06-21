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
      <li>Reseller</li>
      <li>Services</li>
      <li>Products</li>
      <li>Support</li>
      <li>Blogs</li>
      <li>About Us</li>
      <li>Locations</li>
      <li>
        <button className="LogOutBtn" onClick={LogOut} type="button">
          LogOut
        </button>
      </li>
    </ul>
  )
}

export default withRouter(Header)
