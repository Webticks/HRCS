import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const FireLogCompliance = () => {
    const faqsData = [
        { title: "Compliance Assurance", answer: "We stay updated with the latest fire safety regulations, codes, and standards. Our service ensures that your Fire Safety Log Book remains fully compliant, reducing the risk of violations and penalties." },
        { title: "Documentation Management", answer: "We meticulously manage your Fire Safety Log Book, including entries, maintenance records, testing schedules, and compliance documentation. This ensures that your records are organized, complete, and easy to access during inspections." },
        { title: "Regular Audits", answer: ": Our service includes periodic audits to verify the accuracy and completeness of your Fire Safety Log Book. This proactive approach helps identify and rectify any issues before they become compliance concerns." },
        { title: "Emergency Response Planning", answer: "We assist in developing and maintaining emergency response plans tailored to your facility's unique needs, keeping your team prepared for any fire-related incidents." },
        { title: "Notification of Updates", answer: "We keep you informed about any changes in fire safety regulations that may impact your facility. This proactive approach ensures that your Fire Safety Log Book is always current." },
        { title: "Peace of Mind", answer: "Our service ensures that your fire safety records are in order, reducing the stress of compliance management and potential legal liabilities." },
        { title: "Time Savings", answer: "You can focus on your core operations while we handle the intricate details of Fire Safety Log Book management." },
        { title: "Enhanced Safety", answer: "inspections and compliance checks improve the overall safety of your facility, reducing fire risks and protecting occupants." },
        { title: "Cost-Efficiency", answer: "By preventing violations and penalties, our service can save you money in the long run." },
        { title: "Comprehensive Reporting", answer: "You'll receive detailed reports on the status of your Fire Safety Log Book, making it easy to demonstrate compliance to regulatory authorities." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/logBookCompliance.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Fire Safety Log Book Compliance Management</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Fire Log Compliance</li>
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
                                    <span className="sub-title">Fire Log Compliance</span>
                                    <h3>Ensuring peace of mind for your fire safety records.</h3>
                                </div>
                                <p>
                                    Maintaining a comprehensive and up-to-date Fire Safety Log Book is crucial for the safety and compliance
                                    of any facility. However, the task can be complex and time-consuming, often requiring meticulous
                                    record-keeping and in-depth knowledge of fire safety regulations. Our Fire Safety Log Book Compliance
                                    Management Service is designed to relieve you of this burden, ensuring that your facility's fire safety
                                    records are always in compliance with the latest regulations and readily accessible when needed.
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
                                    <li>Compliance Assurance</li>
                                    <li>Documentation Management</li>
                                    <li>Regular Audits</li>
                                    <li>Emergency Response Planning</li>
                                    <li>Notification of Updates</li>
                                    <li>Peace of Mind</li>
                                    <li>Time Savings</li>
                                    <li>Enhanced Safety</li>
                                    <li>Cost-Efficiency</li>
                                    <li>Comprehensive Reporting</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/logBookRed.png"
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
                                                i <= 4 && (
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
                                                i > 4 && (
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
export default FireLogCompliance;
