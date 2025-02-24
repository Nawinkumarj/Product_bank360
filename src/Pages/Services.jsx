import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="service-container">
      <div className="service-main">
        <div className="service-head">
          <h1>Our Service</h1>
        </div>
        <div className="service-slider">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
