import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";

const TrainingEducation = () => {
    const faqsData = [
        { title: "Specialized Training", answer: "One-size-fits-all training does not suffice when it comes to safety. Our programs are tailor-made to address the specific needs and challenges of your high-rise building, ensuring maximum relevance and impact." },
        { title: "Comprehensive Curriculum", answer: "Our expert trainers cover a wide array of fire & life safety topics, from evacuation procedures and fire prevention measures to emergency response protocols. This overall approach prepares stakeholders for a variety of scenarios." },
        { title: "Building Staff Empowerment ", answer: "The first line of defense against potential emergencies is your building staff. We empower them with the knowledge and skills needed to detect and respond to safety hazards promptly and effectively." },
        { title: "Management Guidance", answer: "Our training programs extend to building management, providing them with the tools to lead safety initiatives and create a safety-focused culture within the organization" },
        { title: "Occupant Preparedness", answer: "Occupants play a vital role in their own safety during emergencies. We educate and train them on how to respond swiftly and safely in critical situations, minimizing panic and maximizing the chances of successful evacuation." },
        { title: "Cultivating Safety Culture", answer: " Our training programs are not just about passing on information; they foster a culture of safety within your high-rise building. When safety becomes ingrained in the minds of all occupants, it becomes second nature." },
        { title: "Compliance with Regulatory Standards", answer: "Our training programs align with fire & life safety codes and regulations, ensuring that your building meets the necessary compliance requirements." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/fireExtinguisher.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Training and Education</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Training and Education</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Start Management Section ======*/}
            <section className="management-section pt-120 ">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-12">
                            {/*=== Management content box ===*/}
                            <div className="management-one_content-box content-box-gap mb-50 ml-lg-40 wow fadeInRight">
                                <div className="section-title section-title-left mb-25">
                                    <span className="sub-title">Training and Education</span>
                                    <h3>Empowering safety through knowledge by building a culture of preparedness.</h3>
                                </div>
                                <p>
                                    At High Rise Compliance Solutions LLC We believe that knowledge is the foundation of safety. Our
                                    training and education programs are meticulously designed to equip building staff, management, and
                                    occupants with the essential skills and awareness of fire & life safety best practices. We offer specialized
                                    training programs for building staff, management, and occupants to raise awareness about fire & life safety
                                    best practices. By empowering stakeholders with knowledge, we promote a culture of safety within the
                                    high-rise buildings we serve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== End Management Section ======*/}
            {/*====== Start Optimization Section ======*/}
            <section className="optimization-section pt-40">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            {/*=== Optimization Content Box ===*/}
                            <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                                <div className="section-title section-title-left">
                                    <h2 style={{ fontSize: '32px' }}>Key Features and Benefits:</h2>
                                </div>
                                <ul className="check-style-three">
                                    <li>Specialized Training</li>
                                    <li>Comprehensive Curriculum</li>
                                    <li>Building Staff Empowerment</li>
                                    <li>Management Guidance </li>
                                    <li>Occupant Preparedness</li>
                                    <li>Cultivating Safety Culture</li>
                                    <li>Compliance with Regulatory Standards:</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/training2.jpg"
                                    className="optimization-img-one"
                                    alt="optimization image"
                                    style={{ borderRadius: '12px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== End Optimization Section ======*/}
            {/*====== Start Faq Section ======*/}
            <section className="faq-section light-gray-bg pt-50 pb-80">
                <div className="container">
                    {/*=== Faq Accordion ===*/}
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            {/*=== Common Heading ===*/}
                            <div className="section-title text-center mb-60 wow fadeInDown">
                                <h2>Features & Benefits</h2>
                            </div>
                        </div>
                    </div>
                    <div className="faq-accordion-two wow fadeInUp" id="accordionOne">
                        <Accordion defaultActiveKey={active}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="accordion mb-50">
                                        {faqsData.map(
                                            (faq, i) =>
                                                i <= 3 && (
                                                    <FintexAccordion
                                                        key={i}
                                                        active={active}
                                                        onClick={() => setActive(`event-${i}`)}
                                                        title={faq.title}
                                                        answer={faq.answer}
                                                        eventName={`event-${i}`}
                                                    />
                                                )
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion mb-50">
                                        {faqsData.map(
                                            (faq, i) =>
                                                i > 3 && (
                                                    <FintexAccordion
                                                        key={i}
                                                        active={active}
                                                        onClick={() => setActive(`event-${i}`)}
                                                        title={faq.title}
                                                        answer={faq.answer}
                                                        eventName={`event-${i}`}
                                                    />
                                                )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Accordion>
                    </div>
                </div>
            </section>
            {/*====== End Faq Section ======*/}
        </Layout>
    );
};
export default TrainingEducation;
