import Link from "next/link";
import Image from "next/image";

const LatestServices = () => {
  const services = [
    {
      imgSrc: "assets/images/services/quality.jpg",
      title: "Compliance Audits",
      link: "/compliance-audits",
      description: "Ensuring high-rise buildings exceed safety codes through strategic regulatory compliance audits.",
    },
    {
      imgSrc: "assets/images/services/fireLogBook.png",
      title: "Fire Log Compliance",
      link: "/fire-log-compliance",
      description: "Ensuring peace of mind for your fire safety records.",
    },
    {
      imgSrc: "assets/images/services/certificationCompliance.jpg",
      title: "Certification Compliance",
      link: "/certification-compliance",
      description: "Guiding you to safety and compliance excellence.",
    },
    {
      imgSrc: "assets/images/services/fire-ext-inspection.jpg",
      title: "Inspection Services",
      link: "/inspection-services",
      description: "Delegate safety inspections, stay compliant, focus on core business success.",
    },
    {
      imgSrc: "assets/images/services/risk-man-home.jpg",
      title: "Tailored Risk Management Solutions",
      link: "/risk-management",
      description: "Empowering against fire and safety challenges with tailored resilience solutions.",
    },
    {
      imgSrc: "assets/images/services/Cybersecurity2.jpg",
      title: "Fire & Life Safety Dashboard",
      link: "/safety-dashboard",
      description: "Introducing a cutting-edge solution for enhanced safety and compliance management.",
    },
    {
      imgSrc: "assets/images/services/SOPs.jpg",
      title: "Standard Operating Procedures",
      link: "/sop",
      description: "High Rise Compliance: Experts in SOPs for regulatory compliance and safety.",
    },

  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default LatestServices;

const ServiceItem = ({ imgSrc, title, link, description }) => (
  <div className="col-lg-3 col-md-6 mb-4">
    <div className="service-item wow fadeInUp">
      <div className="img-holder">
        <img src={imgSrc} alt="service image" style={{ height: '190px', width: '100%' }} />
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