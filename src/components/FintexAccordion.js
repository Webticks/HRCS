import { Accordion } from "react-bootstrap";

const FintexAccordion = ({ title, answer, eventName, onClick, active }) => {
  return (
    <div
      className={`accordion-card mb-15 ${active === eventName ? "accordion-active" : ""
        }`}
    >
      <div className="card-header">
        <Accordion.Toggle
          as={"h5"}
          eventKey={eventName}
          aria-expanded={active === eventName ? "true" : "false"}
          onClick={() => onClick()}
        >
          {title}
        </Accordion.Toggle>
      </div>
      <Accordion.Collapse eventKey={eventName}>
        <div className="card-body">
          <p>
            {answer}
          </p>
        </div>
      </Accordion.Collapse>
    </div>
  );
};
export default FintexAccordion;
