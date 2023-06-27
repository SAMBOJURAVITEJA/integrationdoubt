import Cookies from 'js-cookie'
import './index.css'

import Header from '../Header'

const date = new Date()

const name = Cookies.get('jwt_token')

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <h1>
        Hi {name} !<br />
        Your Interview Was Confirmed On The Date
      </h1>
      <p>
        {date.toDateString()} On
        <br />
        {date.toLocaleTimeString()}
      </p>
      <p>Hope! You Will Do well</p>
    </div>
  </>
)

export default Home
