import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Image from "next/image";
const ComplianceAudits = () => {
    const faqsData = [
        { title: "In-Depth Audits", answer: "Our seasoned auditors conduct comprehensive evaluations of your high-rise building's fire and life safety systems. By meticulously examining each aspect of your safety measures, we leave no room for potential oversights, providing you with a comprehensive compliance picture." },
        { title: "Expert Insights", answer: "With years of industry-specific experience, our auditors possess a deep understanding of complex regulations and requirements. We leverage our expertise to guide you through the intricacies of compliance, offering clarity and actionable recommendations." },
        { title: "Tailored Compliance Strategies", answer: "We recognize that every high-rise building is unique, with its own set of challenges. Our auditors develop a customized compliance strategy, designed to address your building's specific needs and constraints while ensuring optimum safety and regulatory adherence." },
        { title: "Proactive Risk Mitigation", answer: "These audits empower you to identify and mitigate potential risks before they escalate. By staying ahead of compliance requirements, you can safeguard your building, occupants, and reputation from avoidable hazards." },
        { title: "Compliance Confidence", answer: "Achieving and maintaining compliance is essential for building owners and stakeholders. Our audit services provide you with confidence and assurance that your building meets the highest safety standards, giving confidence to all stakeholders." },
        { title: "Simplifying Complexities", answer: "Navigating the ever-evolving landscape of fire and life safety codes and regulations can be overwhelming. Our audit process is designed to simplify and provide you a clear roadmap to compliance, alleviating compliance-related stress." },
        { title: "Ongoing Support", answer: "Compliance is an ongoing journey, and we are here to support you every step of the way. Beyond the audit, our team remains available to answer questions, address concerns, and provide continued guidance to ensure sustained compliance." },
        { title: "Embrace a Culture of Compliance Excellence", answer: "We view regulatory compliance as the cornerstone of a safe and secure high-rise building environment. Our regulatory compliance audits are not just a checklist, they are the key to unlocking a culture of compliance excellence, where safety is prioritized and always upheld." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/quality.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Regulatory Compliance Audits</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Regulatory Compliance Audits</li>
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
                                    <span className="sub-title">Compliance Audits</span>
                                    <h3>Navigating the Path to Unwavering Compliance</h3>
                                </div>
                                <p>
                                    We recognize the paramount importance of adhering to fire and life safety codes and standards in
                                    high-rise buildings. Our regulatory compliance audits provide a strategic and proactive approach to ensure
                                    that your building not only meets but exceeds local, national, and international safety regulations.
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
                                    <h2 style={{fontSize:'32px'}}>Key Features and Benefits:</h2>
                                </div>
                                <ul className="check-style-three">
                                    <li>In-Depth Audits</li>
                                    <li>Expert Insights</li>
                                    <li>Tailored Compliance Strategies</li>
                                    <li>Proactive Risk Mitigation</li>
                                    <li>Compliance Confidence</li>
                                    <li>Simplifying Complexities</li>
                                    <li>Ongoing Support</li>
                                    <li>Embrace a Culture of Compliance Excellence</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/comp2.jpg"
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
export default ComplianceAudits;
