import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";
import Image from "next/image";

const Sop = () => {
    const faqsData = [
        { title: "Comprehensive SOP Development", answer: "Our expert consultants work closely with your team to develop SOPs tailored to your high-rise building's specific needs and regulatory requirements. We ensure that your SOPs are comprehensive, clear, and actionable." },
        { title: "Regulatory Compliance", answer: "We stay up-to-date with the latest regulations and standards to ensure that your SOPs are compliant with all applicable laws and regulations. This helps you avoid potential fines, penalties, and liabilities." },
        { title: "Operational Efficiency", answer: "Well-designed SOPs can significantly improve operational efficiency by standardizing processes, reducing errors, and improving communication among staff members." },
        { title: "Risk Mitigation", answer: "SOPs play a crucial role in identifying and mitigating risks in high-rise buildings. Our consultants help you develop SOPs that address potential risks and ensure the safety of occupants and assets." },
        { title: "Training and Implementation", answer: "We provide training and support to help your team understand and implement the SOPs effectively. This ensures that the SOPs are followed consistently and correctly." },
        { title: "Continuous Improvement", answer: "SOPs should be dynamic documents that evolve with your high-rise building's needs and changes in regulations. Our consultants help you establish processes for reviewing, updating, and improving your SOPs over time." },
        { title: "Peace of Mind", answer: "By entrusting the development of your SOPs to HIGH-RISE Compliance Solutions, you can have peace of mind knowing that your high-rise building is operating safely, efficiently, and in compliance with all relevant regulations." },
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
                                <h1 className="page-title">Standard Operating Procedures (SOPs)</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Standard Operating Procedures (SOPs)</li>
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
                                    <span className="sub-title">Standard Operating Procedures (SOPs)</span>
                                    <h3>Empowering safety through knowledge by building a culture of preparedness.</h3>
                                </div>
                                <p>
                                    At High Rise Compliance Solutions LLC, we understand that establishing and maintaining robust Standard Operating Procedures (SOPs) is essential for ensuring regulatory compliance, operational efficiency, and safety in high-rise buildings. Our Compliance Consulting Service for SOPs is designed to help you create, develop, and implement SOPs that meet the highest standards of safety and compliance.
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
                                    <li>Comprehensive SOP Development</li>
                                    <li>Regulatory Compliance</li>
                                    <li>Operational Efficiency</li>
                                    <li>Risk Mitigation</li>
                                    <li>Training and Implementation</li>
                                    <li>Continuous Improvement</li>
                                    <li>Peace of Mind</li>
                                </ul>
                                <p>
                                    Enhance high-rise safety with our SOP development services. Whether creating or updating SOPs, ensure compliance and operational excellence. Contact us for expert support.
                                </p>
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
export default Sop;
