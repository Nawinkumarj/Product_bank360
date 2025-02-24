import { assets } from "../assets/assets";
import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    const [error, setError] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const validate = () => {
      let error = {};

      if (!formData.name.trim())  {
        error.name = "Name is required";
      }

      if (!formData.email.trim()) {
        error.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        error.email = "Invalid email format";
      }

      if (!formData.phone.trim()) {
        error.phone = "Phone Number is required";
      } else if (!/^\d{10}$/.test(formData.phone)) {
        error.phone = "Phone number must be exactly 10 digits";
      }

      if (!formData.service) {
        error.service = "service selection is required";
      }

      if (!formData.message) {
        error.message = "message selection is required";
      }

      return error;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
    
      if (name === "phone") {
        if (!/^\d*$/.test(value)) return;
      }
    
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    

    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = validate();
      setError(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitted(true);
        alert("Form submitted successfully", formData);
      }
    };
 
  return (
    <div className="contact-container">
      <div className="contact-main">
        <div className="contact-section1">
          <div className="contact-mobile">
            <h1>contact us</h1>
          </div>
          <div className="contact-head1">
            <h1>contact us</h1>
            <p>
              Ut nulla iusto sit optio cumque est obcaecati natus et velit
              repudiandae et quis veniam qui tempora vero. Sed quia quod eum
              possimus praesentium qui
            </p>
          </div>
          <div className="contact-details">
            {/* <div className="contact-details1">
              <div className="details1-img">
                <img src={assets.location} alt="" />
              </div>
              <div className="details1-content">
                <h1>address</h1>
                <p>
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur adipisicing elit.
                </p>
              </div>
            </div> */}
            <div className="contact-details1">
              <div className="details1-img">
                <img src={assets.call} alt="" />
              </div>
              <div className="details1-content">
                <h1>Phone</h1>
                <p>+91 84697-57864</p>
              </div>
            </div>
            <div className="contact-details1">
              <div className="details1-img">
                <img src={assets.email} alt="" />
              </div>
              <div className="details1-content">
                <h1>Email</h1>
                <p>www.sample.com</p>
              </div>
            </div>
          </div>
          <div className="contact-media">
            <div className="media-head">
              <h1>social media:</h1>
            </div>
            <div className="media-icons">
              <img src={assets.linkedin} alt="" />
              <img src={assets.fb} alt="" />
              <img src={assets.insta} alt="" />
            </div>
          </div>
        </div>
        <div className="contact-section2">
          <div className="section2-main">
            <div className="contact-head2">
              <h1>get in touch with us</h1>
            </div>
            <div className="contact-form">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-section">
                  <div className="form-section1">
                    <label htmlFor="name">Your Name*</label>
                    <input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {error.name && <div className='formError'> <img src={assets.errorIcon} alt="" />  <p>{error.name}</p> </div> }
                  </div>
                  <div className="form-section1">
                    <label htmlFor="email">Your Email*</label>
                    <input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {error.email && <div className='formError'> <img src={assets.errorIcon} alt="" />  <p>{error.email}</p> </div> }
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section1">
                    <label htmlFor="phone">Phone Number*</label>
                    <input
                      placeholder="Phone Number"
                      type="tel"
                      name="phone"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {error.phone && <div className='formError'> <img src={assets.errorIcon} alt="" />  <p>{error.phone}</p> </div> }
                  </div>
                  <div className="form-section1">
                    <label htmlFor="service">Service*</label>
                    <select
                      placeholder="Choose Service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Choose Service</option>
                      <option value="Service 1">Service 1</option>
                      <option value="Service 2">Service 2</option>
                    </select>
                    {error.service && <p className="formError">{error.service}</p>}
                  </div>
                </div>
                <div className="form-textarea">
                  <div className="form-section2">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      name="message"
                      placeholder="Write Message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {error.message && <div className='formError'> <img src={assets.errorIcon} alt="" />  <p>{error.message}</p> </div> }
                  </div>
                </div>
                <div className="form-button">
                  <button type='submit'>send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
