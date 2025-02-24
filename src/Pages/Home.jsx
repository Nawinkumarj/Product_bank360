
import { assets } from '../assets/assets'
const Home = () => {
  return (
    <div className='home-section'>
      <div className="home-section-heading"><h2>the product bank 360</h2></div>
      <div className="home-section-container">
        <div className="home-section-left">
          <img src={assets.eicon} alt="" />
          <img src={assets.circle} alt="" className="globe-circle-img" />
        </div>
        <div className="home-section-right">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolores, id, nemo ullam mollitia a eum cum iure eaque, veritatis earum? Sit dolorem incidunt corporis, aspernatur et ullam accusantium quasi?</p>
          <button className='home-section-button'>Explore Us</button>
        </div>
      </div>
    </div>
  )
}

export default Home