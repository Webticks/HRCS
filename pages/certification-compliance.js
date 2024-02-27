import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";

const CertificationCompliance = () => {
    const faqsData = [
        { title: "Comprehensive Certification Support", answer: "Our team of experts is well-versed in the intricacies of certification processes. We provide end-to-end support, guiding you through each step to ensure a smooth and efficient certification journey." },
        { title: "Streamlined Complexities", answer: "Navigating the landscape of certifications can be daunting, with various requirements and standards to meet. We simplify the complexities for you, breaking down the process into manageable steps and providing clarity on the necessary actions." },
        { title: "Industry-Specific Expertise", answer: "With our wealth of industry-specific knowledge, we possess a deep understanding of the diverse regulations and standards applicable to high-rise buildings. This expertise enables us to tailor our certification services to your building's unique requirements." },
        { title: "Confidence", answer: "Achieving certification is not just a formality, it signifies that your building has met the highest safety and compliance benchmarks. By obtaining the necessary certifications, you can instill confidence in building occupants, stakeholders, and regulatory authorities." },
        { title: "Proactive Compliance Measures", answer: "Our certification compliance services extend beyond mere paperwork. We proactively assess your building's fire and life safety measures, ensuring that they align with the latest regulations and standards to prevent potential compliance gaps." },
        { title: "Continuous Compliance Monitoring", answer: "Compliance is an ongoing commitment, and we stand by your side to monitor and track certification renewals and updates. This approach ensures that your building remains compliant and up to date with evolving safety requirements." },
        { title: "Reputation Enhancement", answer: "As a leading provider of fire & life safety solutions, our commitment to guiding you through the certification process reflects our dedication to excellence. Achieving certification elevates your building's reputation as a safe and responsible structure within the community." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/complianceBanner.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Certification Compliance</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Certification Compliance</li>
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
                                    <span className="sub-title">Certification Compliance</span>
                                    <h3>Guiding you to safety and compliance excellence.</h3>
                                </div>
                                <p>
                                    High Rise Compliance Solutions LLC is dedicated to helping you navigate the certification process
                                    seamlessly. We believe that obtaining the necessary certifications should not be a burden but rather an
                                    opportunity to showcase your commitment to safety and compliance. We understand the significance of
                                    obtaining the necessary certifications for high-rise buildings. Our certification compliance services are
                                    strategically designed to validate the adherence of your building to industry-specific fire and life safety
                                    regulations and standards.
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
                                    <li>Comprehensive Certification Support</li>
                                    <li>Streamlined Complexities</li>
                                    <li>Industry-Specific Expertise</li>
                                    <li>Confidence</li>
                                    <li>Proactive Compliance Measures</li>
                                    <li>Continuous Compliance Monitoring</li>
                                    <li>Reputation Enhancement</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/certificationcompliance2.png"
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
export default CertificationCompliance;
