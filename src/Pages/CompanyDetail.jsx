import { useParams, useNavigate } from "react-router-dom";
import ServiceData from "../data/ServiceData";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import WOW from "wowjs";
import "animate.css";

const CompanyDetail = () => {
  const { id, subserviceId, companyId } = useParams();// Get service, subservice, and company IDs from URL
 const navigate = useNavigate();


  const service = ServiceData.find((s) => s.id === parseInt(id));
  const subservice = service?.subServices.find(
    (s) => s.id === parseInt(subserviceId)
   
  );
  const company = subservice?.companies.find(
    (c) => c.id === parseInt(companyId)
  );

  if (!company) {
    return <h2>Company Not Found</h2>;
  }

  return (
    <div className="companyIn-container">
      <div className="companyIn-main">
        <div className="companyIn-head">
          <h1>{company.name}</h1>
          <div className="previous-button">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
          </div>
        </div>
        <div className="companyIn-bg">
          <div className="companyIn-bg1 wow animate__animated animate__slideInLeft">
            <img src={assets.s2} />
            <div className="companyIn-content1">
              <h2>entities</h2>
              <div>
                {company.entities.map((entity, index) => (
                  <div key={index} className="service-item">
                    <img src={assets.star} alt="Star Icon" />
                    <Link to={entity.link}>
                      <p>{entity.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="companyIn-bg2 wow animate__animated animate__slideInRight">
            <img src={assets.s3} />
            <div className="companyIn-content2">
              <h2>services</h2>
              <div>
                {company.services.map((service, index) => (
                  <div key={index} className="service-item">
                    <img src={assets.star} alt="Star Icon" />
                    <Link to={service.link}>
                      <p>{service.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
