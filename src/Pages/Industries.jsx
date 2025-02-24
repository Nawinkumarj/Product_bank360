import { assets } from '../assets/assets'

const Industries = () => {
  return (
    <div className="industries">
      <h1 className='industries-heading'>Industries</h1>
      <div className="industries-section">
        <div className="industries-section-item">
            <img src={assets.bfc} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div> 
        <div className="industries-section-item">
            <img src={assets.consul} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div>
        <div className="industries-section-item">
            <img src={assets.pc} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div>
        <div className="industries-section-item">
            <img src={assets.eeb} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div>
        <div className="industries-section-item">
            <img src={assets.nexus} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div>
        <div className="industries-section-item">
            <img src={assets.syn} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div>
        <div className="industries-section-item">
            <img src={assets.els} alt="" />
            <p>Our healthcare solutions help patients and healthcare professionals work together to achieve better health outcomes.</p>
            <button className='industries-btn'>Visit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Industries
