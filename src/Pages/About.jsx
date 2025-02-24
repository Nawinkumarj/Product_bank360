import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='about-section'>
      <div className="about-section-container">
        <div className="about-section-left">
          <div className="aboutus-section">
            <h1 className="about-section-title">About Us</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quaerat praesentium dignissimos voluptates assumenda officia non! Est consectetur cupiditate, inventore quae eligendi, in error repellendus ratione minus voluptas aperiam omnis suscipit dolorem ab et expedita, id temporibus libero laboriosam corporis beatae aliquam. Nulla assumenda blanditiis ipsa deleniti magnam reprehenderit dolores.</p>
          </div>
          <div className="about-why-section">
            <h1 className='why-section-1'>Why</h1>
            <h1 className='why-section-2'>Choose</h1>
            <h1 className='why-section-3'>Us</h1>
            <img src={assets.qmark} alt="" className='qmark-img' />
            <div className="why-choose-points">
              <div className="why-choose-point">
                <img src={assets.a1} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nam totam animi accusantium hic commodi nihil. Consectetur sint at commodi ea quam distinctio eligendi accusantium!</p>
              </div>
              <div className="why-choose-point">
                <img src={assets.a2} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consectetur, aspernatur sunt quos aperiam eos veritatis molestias asperiores distinctio delectus, nemo officiis eaque doloremque labore!</p>
              </div>
              <div className="why-choose-point">
                <img src={assets.a3} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad neque quibusdam quam molestias consectetur porro delectus, voluptatem consequuntur laborum dicta quod error architecto maxime cum!</p>
              </div>
            </div>
          </div>

        </div>
        <div className="about-section-right">
          <img src={assets.a4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About

