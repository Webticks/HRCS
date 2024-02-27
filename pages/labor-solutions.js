import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";
import Image from "next/image";
const LaborSolutions = () => {
    const faqsData = [
        { title: "Automation and Controls Specialists", answer: "These experts play a pivotal role in ensuring the seamless functioning of building automation systems and control mechanisms. They specialize in the installation, maintenance, and troubleshooting of these systems, ensuring optimal performance and integration with fire and life safety systems." },
        { title: "Environmental Technologists", answer: "Our Environmental Technologists are adept at assessing and managing environmental factors within high-rise buildings. They focus on air quality, waste management, and sustainable practices, ensuring that your building operates in an environmentally responsible and compliant manner" },
        { title: "Water Treatment Plant Operators", answer: "Ensuring the quality and safety of water within high-rise buildings is crucial. Our Water Treatment Plant Operators are responsible for the operation and maintenance of on-site water treatment systems. They ensure that water quality meets health and safety standards, and that systems function efficiently and reliably." },
        { title: "Stationary Engineers", answer: ": Stationary Engineers are integral to the maintenance and operation of mechanical systems in high-rise buildings. They oversee heating, ventilation, air conditioning (HVAC) systems, boilers, and other mechanical systems, ensuring they are running safely and efficiently." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/labor1.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Technical Labor Services</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Labor Solutions</li>
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
                                    <span className="sub-title">Technical Labor Services</span>
                                    <h3>Empowering High Rises with Specialized Expertise.</h3>
                                </div>
                                <p>
                                    At High Rise Compliance Solutions LLC, we understand the critical importance of technical expertise in
                                    maintaining and enhancing the operational efficiency and safety of high-rise buildings. To meet this need,
                                    we offer specialized Technical Labor Services, providing clients with temporary access to highly skilled
                                    professionals in key technical areas.
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
                                    <h2 style={{ fontSize: '32px' }}>Our service portfolio in this domain includes:</h2>
                                </div>
                                <ul className="check-style-three">
                                    <li>Automation and Controls Specialists</li>
                                    <li>Environmental Technologists</li>
                                    <li>Water Treatment Plant Operators</li>
                                    <li>Stationary Engineers</li>
                                </ul>
                                <p>
                                    Our technical specialists offer flexible, expert support for temporary needs. Whether short-term projects or filling team gaps, our services ensure seamless integration, enhancing safety, compliance, and efficiency in high-rise buildings.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/labor2.jpg"
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
                                <h2>Our Service Portfolio</h2>
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
                                                i <= 1 && (
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
                                                i > 1 && (
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
export default LaborSolutions;
