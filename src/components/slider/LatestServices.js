import Link from "next/link";
import { serviceSliderOne } from "../../sliderProps";

const ServiceItem = ({ imgSrc, title, link, description }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="service-item wow fadeInUp">
      <div className="img-holder">
        <img src={imgSrc} alt="service image" />
      </div>
      <div className="service-content">
        <div className="text">
          <div className=" d-flex">
            <i className="flaticon-competitive" />
            <h3 className="title">
              <Link legacyBehavior href={link}>
                <a>{title}</a>
              </Link>
            </h3>
          </div>
        </div>
        <div className="hover-text text-white">
          <div className="title-icon d-flex">
            <i className="flaticon-competitive" />
            <h3 className="title">
              <Link legacyBehavior href={link}>
                <a>{title}</a>
              </Link>
            </h3>
          </div>
          <p>{description}</p>
          <Link legacyBehavior href={link}>
            <a className="icon-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const LatestServices = () => {
  const services = [
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    {
      imgSrc: "assets/images/service/img-1.jpg",
      title: "Business Consulting",
      link: "/service-details",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan",
    },
    
    // Add more service items
  ];

  return (
    <div className="container">
      <div className="row">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default LatestServices;

