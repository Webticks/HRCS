import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";
import Image from "next/image";
const InspectionServices = () => {
    const faqsData = [
        { title: "Scheduled Inspections", answer: "Our team of highly trained professionals will handle all aspects of scheduling your regulatory inspections, ensuring they are conducted promptly and in accordance with local, national, and international standards." },
        { title: "Thorough Assessments", answer: "Rest assured that our inspectors will leave no stone unturned during the assessments. They will meticulously examine all regulatory safety systems, including fire prevention, detection, and suppression systems, ensuring that every component is in optimal working condition." },
        { title: "Customized Inspection Plans", answer: "We tailor our Inspection Services to fit the unique needs of your building. Whether you have a single high-rise property or a diverse portfolio, we can create a customized plan that aligns with your specific requirements." },
        { title: "Regular Inspection Reminders", answer: "Say goodbye to missed deadlines and potential compliance lapses. We will provide you with timely reminders for upcoming inspections, allowing you to plan and prepare in advance." },
        { title: "Compliance Reporting", answer: "Receive detailed reports after each inspection, outlining the findings and recommendations. Our clear and concise reports will empower you to address any issues promptly, ensuring continuous compliance." },
        { title: "Dedicated Compliance Support", answer: "Our team will be there every step of the way to address any compliance-related questions or concerns you may have. We pride ourselves on delivering exceptional customer support and being a reliable partner in your safety journey." },
        { title: "Unlock the Full Potential of Safety and Compliance", answer: "Unlock the Full Potential of Safety and Compliance with our inspection services, you can rest easy knowing that your high-rise building's fire and life safety systems are in the hands of seasoned experts. Let us take care of the regulatory inspection schedule." },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{ backgroundImage: "url(assets/images/services/inspectionBanner.jpg)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">Inspection Services</h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">Inspection Services</li>
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
                                    <span className="sub-title">Inspection Services</span>
                                    <h3>Delegate safety inspections, focus on core business success confidently.</h3>
                                </div>
                                <p>
                                    Stay confidently compliant while staying focused on your core business, as
                                    your safety systems’ regulatory inspection schedule is handled by our team. We understand managing the
                                    multitude of regulatory inspections for fire and life safety systems in high-rise buildings can be
                                    overwhelming and time-consuming. That is why we offer a comprehensive inspection services solution
                                    designed to alleviate the burden and ensure your building&apos;s safety remains in exemplary condition.
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
                                    <li>Scheduled Inspections</li>
                                    <li>Thorough Assessments</li>
                                    <li>Customized Inspection Plans</li>
                                    <li>Regular Inspection Reminders</li>
                                    <li>Compliance Reporting</li>
                                    <li>Dedicated Compliance Support</li>
                                    <li>Unlock the Full Potential of Safety and Compliance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            {/*=== Optimization Image Box ===*/}
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/Inspect-Services.jpg"
                                    className="optimization-img-one"
                                    alt="optimization image"
                                    style={{ borderRadius: '12px', height: '500px' }}
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
export default InspectionServices;
