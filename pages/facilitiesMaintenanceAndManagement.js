import Link from "next/link";
import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import FintexAccordion from "../src/components/FintexAccordion";
import Layout from "../src/layout/Layout";
import Image from "next/image";

const FacilitiesMaintenanceAndManagement = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if window is available (client-side)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        if (typeof window !== "undefined") {
            // Initial check
            handleResize();

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Cleanup on component unmount
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    const faqsData = [
        {
            title: "Cost Savings:",
            answer:
                "Predictive maintenance and energy management lead to reduced operational costs and extended equipment life.",
        },
        {
            title: "Increased Productivity:",
            answer:
                "A well-maintained facility enhances employee comfort and productivity while minimizing disruptions.",
        },
        {
            title: "Risk Mitigation:",
            answer:
                "Regular inspections and maintenance reduce the risk of accidents, property damage, and liability issues.",
        },
        {
            title: "Regulatory Compliance:",
            answer:
                "Our expertise ensures your facility meets all relevant regulations, avoiding potential fines and legal issues.",
        },
        {
            title: "Enhanced Property Value:",
            answer:
                `: Consistent maintenance and upgrades preserve and potentially increase your property's market value.`,
        },
        {
            title: "Scalability:",
            answer:
                "Our services can be custom fit to facilities of all sizes and types, allowing for easy scaling as your organization grows.",
        },
        {
            title: "Time Efficiency:",
            answer:
                "Outsourcing facility management frees up your internal resources to focus on core business activities.",
        },
        {
            title: "Improved Tenant:",
            answer:
                "A well-maintained facility leads to higher satisfaction rates among occupants.",
        },
    ];
    const [active, setActive] = useState(`event-0`);
    return (
        <Layout>
            <section
                className="page-banner bg_cover p-r z-1"
                style={{
                    backgroundImage:
                        "url(assets/images/services/certificationCompliance.jpg)",
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="page-banner-content text-center">
                                <h1 className="page-title">
                                    Facilities Maintenance and Management
                                </h1>
                                <ul className="breadcrumb-link">
                                    <li>
                                        <Link legacyBehavior href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        Facilities Maintenance and Management
                                    </li>
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
                                    <span className="sub-title">
                                        Facilities Maintenance and Management
                                    </span>
                                    <h3>Optimizing Your Facility for Peak Performance.</h3>
                                </div>
                                <p>
                                    Effective facilities maintenance is crucial for organizational
                                    success, providing a safe and productive environment. High
                                    <b> Rise Compliance Solutions LLC</b> manages all aspects of
                                    facility operations and maintenance, allowing you to focus on
                                    your core business while we ensure your facility maintains
                                    innovative, and efficient operational standards.<br></br>
                                    Our Facilities Maintenance and Management Service is your
                                    partner in creating a safe, efficient, and productive
                                    environment. By entrusting us with the complexities of
                                    facility management, you can ensure that your property
                                    operates at its best, supporting your organization&Apos;s success
                                    and growth.
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
                    <div className="section-title section-title-left">
                        <h2 style={{ fontSize: "32px", textAlign: "center" }}>
                            Key Features and Benefits:
                        </h2>
                    </div>
                    <div className="row align-items-center">
                        {/* Content 1 */}
                        <div className="col-xl-5 col-lg-5 order-1 order-lg-2">
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/FACMGMNT3.jpg"
                                    className="optimization-img-one"
                                    alt="optimization image"
                                    style={{ borderRadius: "12px" }}

                                />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 order-2 order-lg-1">
                            <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                                <br />
                                <ul className="check-style-three">
                                    <li>
                                        Preventive Maintenance Programs:
                                        <span className="check-style-three-non-bold margin-features">
                                            We develop and implement customized preventive maintenance
                                            schedules for all building systems and equipment, reducing
                                            unexpected breakdowns and extending asset lifespans.
                                        </span>
                                    </li>
                                    <li>
                                        Predictive Maintenance Technology:
                                        <span className="check-style-three-non-bold margin-features">
                                            We harness advanced AI analytics and machine learning
                                            technology to continuously monitor your facility&Apos;s critical
                                            mechanical systems, analyzing real-time data to detect subtle
                                            changes in performance to anticipate equipment failures.
                                        </span>
                                    </li>
                                    <li>
                                        24/7 Emergency Response:
                                        <span className="check-style-three-non-bold margin-features">
                                            Our team is available round-the-clock to address urgent
                                            maintenance issues, minimizing downtime and potential property
                                            damage.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Content 2 */}
                        <div className="col-xl-5 col-lg-5 order-3 order-lg-3">
                            <div className="optimization-one_image-box text-lg-left mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/FACMGMNT2.jpg"
                                    className="optimization-img-one"
                                    alt="optimization image"
                                    style={{ borderRadius: "12px" }}

                                />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 order-4 order-lg-4"  >
                            <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft" >
                                <ul className="check-style-three" >
                                    <li>
                                        Energy Management:
                                        <span className="check-style-three-non-bold margin-features">
                                            We implement energy-efficient strategies and monitor
                                            consumption to optimize your facility&Apos;s energy use, reducing
                                            costs and environmental impact.
                                        </span>
                                    </li>
                                    <li>
                                        Vendor Management:
                                        <span className="check-style-three-non-bold margin-features">
                                            We coordinate and oversee all third-party service
                                            providers, ensuring quality work and cost-effective
                                            solutions.
                                        </span>
                                    </li>
                                    <li>
                                        Compliance Management:
                                        <span className="check-style-three-non-bold margin-features">
                                            Our experts stay up to date with local, state, and federal
                                            regulations to ensure your facility remains compliant with
                                            all relevant standards and codes.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* Content 3 */}
                        <div className="col-xl-5 col-lg-5 order-5 order-lg-6">
                            <div className="optimization-one_image-box text-lg-right mb-50 wow fadeInRight">
                                <img
                                    src="assets/images/services/FACMGMNT1.jpeg"
                                    className="optimization-img-one"
                                    alt="optimization image"
                                    style={{ borderRadius: "12px" }}

                                />
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 order-6 order-lg-5">
                            <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                                <ul className="check-style-three" >
                                    <li>
                                        Asset Tracking and Inventory Management:
                                        <span className="check-style-three-non-bold margin-features">
                                            We maintain detailed records of all facility assets, their
                                            conditions, and maintenance histories for informed
                                            decision-making and budgeting.
                                        </span>
                                    </li>
                                    <li>
                                        Space Planning and Optimization:
                                        <span className="check-style-three-non-bold margin-features">
                                            Our team analyzes your facility&Apos;s layout and usage patterns
                                            to maximize space efficiency and improve workflow.
                                        </span>
                                    </li>
                                    <li>
                                        Technology Integration:
                                        <span className="check-style-three-non-bold margin-features">
                                            We leverage leading edge facility management software and
                                            IoT solutions to enhance monitoring, reporting, and
                                            operational efficiency.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Content 4 */}
                        <div className="col-xl-12 col-lg-12 order-8 order-sm-7" style={{ marginTop: '-45px' }}>
                            <div className="optimization-one_content-box content-box-gap mb-50 wow fadeInLeft">
                                <ul className="check-style-three" >

                                    <li>
                                        Sustainability Initiatives:
                                        <span className="check-style-three-non-bold margin-features">
                                            We implement eco-friendly practices and technologies to
                                            reduce your facility&Apos;s environmental footprint and promote
                                            sustainability.
                                        </span>
                                    </li>
                                    <li>
                                        Regular Reporting and Analytics:
                                        <span className="check-style-three-non-bold margin-features">
                                            Comprehensive reports on facility performance, maintenance
                                            activities, and cost analysis to support strategic
                                            decision-making.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-7 col-lg-6 order-7 order-sm-8">
        <div className="optimization-one_image-box text-lg-left mb-50 wow fadeInRight ">
          <img
            src="assets/images/services/certificationcompliance2.png"
            className="optimization-img-one "
            alt="optimization image"
            style={{ borderRadius: "12px" }}

          />
        </div>
      </div> */}
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
export default FacilitiesMaintenanceAndManagement;
