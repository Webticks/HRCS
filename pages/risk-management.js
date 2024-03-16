import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";
import Image from "next/image";
const RiskManagement = () => {
    const faqsData = [
        { title: "Personalized Approach", answer: "No two buildings are alike, and neither are their risk profiles. Our expert team takes a personalized approach, thoroughly investigating your building's intricacies to devise bespoke risk management strategies." },
        { title: "Comprehensive Risk Assessments", answer: "We leave no stone unturned in our risk assessments. By identifying potential hazards and vulnerabilities, we help you proactively address and mitigate risks before they escalate into critical issues" },
        { title: "Targeted Mitigation Solutions", answer: "Off-the-shelf solutions fall short when it comes to resilience. Our customized risk management strategies are tailor-made to suit your building's specific needs, ensuring precise and effective risk mitigation." },
        { title: "Minimize Liabilities", answer: " Reducing liabilities is at the core of our risk management approach. We help you navigate potential pitfalls and legal challenges, safeguarding your building's reputation and fiscal interests." },
        { title: "Enhance Building Resilience", answer: "Building resilience goes beyond risk avoidance. We empower your high-rise building to withstand challenges, recover swiftly from incidents, and continue operating seamlessly in the face of adversity" },
        { title: "Regulatory Compliance Integration ", answer: "Our strategies not only enhance resilience but also ensure adherence to fire & life safety codes and regulatory standards. Achieving compliance becomes a natural outcome of our comprehensive risk management solutions." },
        { title: "Proactive Safety Culture", answer: "Our risk management strategies foster a culture of safety within your building. By equipping your team with knowledge and preparedness, we create a shared responsibility for safety among occupants and stakeholders." },
        { title: "Unlock Your Building's Full Resilience Potential", answer: "Our customized risk management strategies are not just plans on paper, they are blueprints for a safer, more secure building structure future. We invest in understanding your building's intricacies, challenges, and empowering you to overcome obstacles and thrive in peace and confidence." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/tailoredRiskManagement.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Customized Risk Management Strategies</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Risk Management</li>
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
                                    <span className="sub-title">Customized Risk Management Strategies</span>
                                    <h3>Tailored resilience solutions empowering you against every fire and life safety challenge.</h3>
                                </div>
                                <p>
                                    High Rise Compliance Solutions LLC We recognize that each high-rise building is unique, with its own
                                    set of challenges and vulnerabilities. Our customized risk management strategies are thoughtfully crafted
                                    to fortify your building&apos;s resilience and shield it from potential liabilities.
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
                                    <li>Personalized Approach</li>
                                    <li>Comprehensive Risk Assessments</li>
                                    <li>Targeted Mitigation Solutions</li>
                                    <li>Minimize Liabilities:</li>
                                    <li>Enhance Building Resilience</li>
                                    <li>Regulatory Compliance Integration</li>
                                    <li>Proactive Safety Culture</li>
                                    <li>Unlock Your Building&apos;s Full Resilience Potential</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <Image
                                    src="assets/images/services/paperwork.jpg"
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
export default RiskManagement;
