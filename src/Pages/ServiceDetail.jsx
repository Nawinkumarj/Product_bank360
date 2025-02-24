
import { useParams, Link, useNavigate } from "react-router-dom";
import ServiceData from "../data/ServiceData";
import { assets } from "../assets/assets";
import { ArrowLeft } from "lucide-react";





// Utility function to split the array into chunks of 3
const splitIntoChunks = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ServiceDetail = () => {
  const { id } = useParams(); // Get the service ID from URL
   const navigate = useNavigate();
  const service = ServiceData.find((s) => s.id === parseInt(id));
  

  if (!service) {
    return <h2>Service Not Found</h2>;
  }

  // Split the subServices into chunks of 3
  const subServicesChunks = splitIntoChunks(service.subServices, 3);

  


  return (
    <div className="serviceIn-container">
      <div className="serviceIn-main">
        <div className="serviceIn-head">
          <h1>{service.name}</h1>
          <div className="previous-button">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
          </div>
        </div>
        <div className="serviceIn-full">
          <div className="serviceIn-background">
            <div className="serviceIn-background-left wow animate__animated animate__rotateInDownLeft">
              <img src={assets.s2} alt="Background 1" />
              <div className="serviceIn-list1">
                {subServicesChunks[0]?.map((subService) => (
                  <div className="serviceIn-service" key={subService.id}>
                    <Link
                      to={`/service/${id}/subservice/${subService.id}`}
                    >
                      <h3>{subService.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="serviceIn-content">
                <h2>{service.name}</h2>
              </div>
            </div>

            <div className="serviceIn-background-right wow animate__animated animate__rotateInDownRight">
              <img src={assets.s3} alt="Background 2" />
              <div className="serviceIn-list2">
                {subServicesChunks[1]?.map((subService) => (
                  <div className="serviceIn-service" key={subService.id}>
                    <Link
                      to={`/service/${id}/subservice/${subService.id}`}
                      state={{ serviceName: service.name }}
                    >
                      <h3>{subService.name}</h3>
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

export default ServiceDetail;
