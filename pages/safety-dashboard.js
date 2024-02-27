import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";
import Image from "next/image";
const SafetyDashboard = () => {
    const faqsData = [
        { title: "Comprehensive Compliance Overview", answer: "Our dashboard provides an instant and comprehensive overview of your building's compliance status, allowing you to quickly identify any areas that require attention. It consolidates data from fire prevention, detection, and suppression systems, as well as regulatory requirements, enabling you to stay informed and take prompt action." },
        { title: "Real-Time Monitoring and Alerts", answer: "Stay one step ahead of potential risks with our real-time monitoring and alert system. The dashboard continuously tracks critical fire and life safety parameters, triggering immediate alerts for any anomalies or issues that need immediate attention, ensuring swift response to potential hazards." },
        { title: "Centralized Data Management", answer: "Say goodbye to scattered spreadsheets and manual record-keeping. Our FLSSC Dashboard centralizes all your safety-related data, simplifying data management and reducing administrative burdens. With easy-to-navigate interfaces, you can access historical records and generate insightful reports at your fingertips." },
        { title: "Customized Risk Assessments", answer: " Our platform allows you to perform customized risk assessments tailored to your building's unique attributes and occupancy characteristics. It helps you prioritize safety measures, allocate resources efficiently, and ensure the most effective risk mitigation strategies." },
        { title: "Compliance Tracking and Reporting", answer: "g Meet regulatory requirements with ease through our compliance tracking and reporting capabilities. The FLSSC Dashboard generates comprehensive compliance reports, simplifying audits and enabling smooth interactions with regulatory authorities." },
        { title: "Interactive Training Resources", answer: " Educate building staff and occupants on fire and life safety best practices with our interactive training resources. Access engaging educational materials, videos, and quizzes directly through the dashboard, promoting a culture of safety and preparedness." },
        { title: "Scalable and Secure", answer: "Whether you manage a single high-rise building or an entire portfolio, our FLSSC Dashboard is scalable to accommodate your needs." },
        { title: "Secure & Reliable Hosting on AWS", answer: "Trust in the industry-leading security of Amazon Web Services (AWS). Our Compliance Dashboard is hosted on AWS, ensuring the highest levels of data protection, web giving you peace of mind knowing your data is secure and available when you need it. Discover the power of our Compliance Dashboard and embark on a safer and more compliant future for your high-rise building today." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/dashboardBanner.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Custom Fire and Life Safety Systems Compliance Dashboards</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Safety Dashboard</li>
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
                                    <span className="sub-title">Safety Dashboard</span>
                                    <h3>Introducing a cutting-edge solution for enhanced safety and compliance management.</h3>
                                </div>
                                <p>
                                    We are committed to revolutionizing the way high-rise building owners and stakeholders manage fire and
                                    life safety compliance. Our innovative FLSSC Dashboard is a powerful, user-friendly, and centralized
                                    platform designed to streamline safety assessments, audits, and risk management processes,
                                    empowering you to proactively ensure the safety and security of your building and its occupants.
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
                                    <li>Comprehensive Compliance Overview</li>
                                    <li>Comprehensive Risk Assessments</li>
                                    <li>Centralized Data Management</li>
                                    <li>Compliance Tracking and Reporting</li>
                                    <li>Real-Time Monitoring and Alerts</li>
                                    <li>Interactive Training Resources</li>
                                    <li>Scalable and Secure</li>
                                    <li>Secure & Reliable Hosting on AWS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <Image
                                    src="assets/images/services/safetyDashboards.jpg"
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
export default SafetyDashboard;
