import { useParams, Link, useNavigate } from "react-router-dom";
import ServiceData from "../data/ServiceData";
import { ArrowLeft } from "lucide-react";
// import WOW from "wowjs";
// import "animate.css";


const SubServiceDetail = () => {
  const { id, subserviceId } = useParams();
  const navigate = useNavigate();
  

  const service = ServiceData.find((s) => s.id === parseInt(id));
  const subService = service?.subServices.find(
    (sub) => sub.id === parseInt(subserviceId)
  );

  if (!subService) {
    return <h2>Sub-Service Not Found</h2>;
  }

  return (
    <div className="subService-container">
      <div className="subService-main">
        <div className="subService-head">
          <h1>{subService.name}</h1>
          <div className="previous-button">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
          </div>
        </div>
        <div className="subService-content">
          <div className="subService-companies">
            {subService.companies.map((company) => (
              <Link
                key={company.id}
                to={`/service/${id}/subservices/${subserviceId}/company/${company.id}`}
              >
                <div className="subservice-list">
                  <img src={company.logo} />
                  <h1 style={{ color: company.color }}> {company.name} </h1>
                  <div className="company-location">
                    <h1>{company.location}</h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceDetail;
