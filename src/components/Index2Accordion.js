import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  "Unmatched Expertise in Fire and Life Safety Compliance",
  "Innovative Technology for Enhanced Safety",
  "Tailored Solutions for Every Building",
  "A Proactive Partner in Safety and Compliance",
];

const Index2Accordion = () => {
  const [active, setActive] = useState("collapse1");
  const onClick = (value) =>
    value == active ? setActive(null) : setActive(value);
  return (
    <div className="faq-accordion-three wow fadeInUp" id="accordionOne">
      <Accordion className="accordion" defaultActiveKey={active}>
        {faqsData.map((faq, i) => (
          <div key={faq} className="accordion-card">
            <div className="card-header">
              <Accordion.Toggle
                as="h5"
                eventKey={`collapse${i + 1}`}
                aria-expanded={active == faq ? "true" : "false"}
                onClick={() => onClick(faq)}
              >
                {faq}
              </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey={`collapse${i + 1}`}>
              <div className="card-body">
                {i === 0 && (
                  <p>
                    High Rise Compliance Solutions LLC brings together a seasoned team of experts with deep knowledge in fire and life safety compliance. Our unparalleled expertise ensures that your high-rise building not only meets but exceeds all regulatory standards. By partnering with us, you gain access to industry-leading insights and innovative solutions that safeguard your property and its occupants.
                  </p>
                )}
                {i === 1 && (
                  <p>
                    We are at the forefront of technological innovation in the field of safety and compliance. Our Fire Safety Log Book Management Service, combined with our custom Compliance Dashboards and other cutting-edge tools, provides real-time monitoring and comprehensive oversight of your buildings safety status. This technology-driven approach enables proactive risk management and streamlined compliance processes, setting a new standard for safety in high-rise buildings.
                  </p>
                )}
                {i === 2 && (
                  <p>
                    Recognizing that no two buildings are the same, we offer a client-centric approach that focuses on understanding your unique needs and objectives. Our services, including Regulatory Compliance Audits, Certification Compliance, and Customized Risk Management Strategies, are meticulously designed to address the specific challenges and requirements of your property. This personalized service ensures that you receive solutions that are not only effective but also perfectly aligned with your buildings characteristics.
                  </p>
                )}
                {i === 3 && (
                  <p>
                    Our commitment to your buildings safety and compliance goes beyond just providing services. We view ourselves as your proactive partner, dedicated to empowering you with the knowledge and tools needed to foster a culture of safety and resilience. From our comprehensive Training and Education programs to ongoing support and guidance, we are with you every step of the way, ensuring that your high-rise building remains a safe and compliant environment.
                  </p>
                )}
              </div>
            </Accordion.Collapse>
          </div>
        ))}
      </Accordion>
    </div>
  );
};
export default Index2Accordion;
