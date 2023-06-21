import './index.css'

import Header from '../Header'

const date = new Date()

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <h1>Your Interview Was Scheduled On The Date</h1>
      <p>{date.toDateString()}</p>
      <p>Hope! You Do well</p>
    </div>
  </>
)

export default Home
