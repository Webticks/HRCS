import { useState, useEffect } from 'react';
import Link from "next/link";
import Slider from "react-slick";
import Counter from "../src/components/Counter";
import Newsletter from "../src/components/Newsletter";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
import Image from "next/image";
import {
  partnerSliderOne,
  teamSliderOne,
  testimonialSliderThree,
} from "../src/sliderProps";
const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setActiveTab(hash || 'mission');
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const showContent = (tab, event) => {
    event.preventDefault();
    setActiveTab(tab);
    window.location.hash = `#${tab}`;
  };

  return (
    <Layout>
      <PageBanner pageName={"About Our Company"} />
      {/*====== End Breadcrumb Section ======*/}
      {/*====== Start About Section  ======*/}
      <section className="about-section-three pt-130 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-50 wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Our Team</span>
                  <h2>Elevating Fire and Life Safety Standards</h2>
                </div>
                <p>
                  High Rise Compliance Solutions LLC is committed to leading the fire and life safety compliance sector. Focused on expert knowledge, innovation, and client-centricity, we prioritize elevating safety standards in high-rise buildings, with a strategic emphasis on the San Francisco Bay Area.                </p>
                <ul className="check-style-one mb-30">
                  <li>Comprehensive Solutions</li>
                  <li>Innovation at Core</li>
                  <li>Strategic Expansion</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Image Box ===*/}
              <div className="about-two_image-box pl-lg-70 mb-50 wow fadeInRight">
                <div className="about-one-img">
                  <div className="image-overlay" />
                  <Image src="assets/images/services/about1.png" alt="" />
                </div>
                <div className="quote-box-four text-white">
                  <h3>Leading High-Rise Safety Solutions</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-90 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== About Image Box ===*/}
              <div className="about-three_image-box p-r mb-50">
                <div className="row">
                  <div className="col-md-6">
                    <Image
                      src="assets/images/gallery/img-2.png"
                      className="about-one-img wow fadeInUp"
                      alt="Mission Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <Image
                      src="assets/images/gallery/img-3.png"
                      className="about-two-img wow fadeInDown"
                      alt="Mission Image"
                    />
                  </div>
                </div>
                <div className="big-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        src="assets/images/logo/big-logo-1.png"
                        alt="Site logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== About Content Box ===*/}
              <div className="about-content-box mb-50">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Strategic Planning</span>
                  <h2>Safeguarding High-Rise Legacies</h2>
                </div>
                <div className="tab-content-box wow fadeInUp">
                  <ul className="nav nav-tabs mb-20">
                    <li className="nav-item">
                      <a
                        href="#mission"
                        className={`nav-link ${activeTab === 'mission' ? 'active' : ''}`}
                        onClick={(e) => showContent('mission', e)}
                      >
                        Our Mission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#vision"
                        className={`nav-link ${activeTab === 'vision' ? 'active' : ''}`}
                        onClick={(e) => showContent('vision', e)}
                      >
                        Our Vision
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content mb-30">
                    {activeTab === 'mission' && (
                      <div className="tab-pane fade show active" id="mission">
                        <div className="content-box">
                          <p>
                            Safeguarding lives, property in high-rises, delivering top-tier risk management. Ensuring compliance, leveraging expertise, technology, dedicated to qualityand our goal is to create secure work environments, trusted partner in building safety.{" "}
                          </p>
                          <ul className="check-style-two">
                            <li>Risk Management Excellence</li>
                            <li>Compliance Assurance</li>
                            <li>Secure Work Environments</li>
                            <li>Trusted Safety Partnership</li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeTab === 'vision' && (
                      <div className="tab-pane fade show active" id="vision">
                        <div className="content-box">
                          <p>
                            High Rise Compliance Solutions LLC envisions a world where every building is a bastion of safety, fostering a secure environment for all. Our commitment to integrity, transparency, and sustainability drives us to be the foremost leader in fire and life safety compliance solutions.                          </p>
                          <ul className="check-style-two">
                            <li>Ensure Compliance</li>
                            <li>Operational Streamlining</li>
                            <li>Adapting to Emerging Needs</li>
                            <li>Investing in People</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start History Section ======*/}
      <section className="history-section pt-125 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Company History</span>
                <h2>Explore More About Us</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/*=== History Timeline ===*/}
              <div className="history-timeline">
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="history-img">
                    <Image
                      src="assets/images/gallery/history-1.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon"></span> We Started
                    </h4>
                    <p>
                      To meet the rising demand for specialized fire and life safety services in high-rise buildings, driven by the complexities of compliance and safety standards.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="history-img">
                    <Image
                      src="assets/images/gallery/history-2.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon"></span>Leadership Legacy
                    </h4>
                    <p>
                      Guided by a 30-year industry veteran, the company&apos;s CEO brings deep expertise, shaping a commitment to safeguarding safety and security within high-rise buildings.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="history-img">
                    <Image
                      src="assets/images/gallery/history-3.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon"></span>Mission Beyond Safety
                    </h4>
                    <p>
                      The company&apos;s mission extends beyond safety, actively assisting building owners and stakeholders in maintaining impeccable compliance with regulatory standards.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="history-img">
                    <Image
                      src="assets/images/gallery/history-4.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon"></span>Dynamic Vision for Excellence
                    </h4>
                    <p>
                      High Rise Compliance Solutions pursues excellence in fire and life safety, viewing it as a dynamic vision that propels continuous improvement and staying at the forefront of industry standards.
                    </p>
                  </div>
                </div>
                <div
                  className="single-history-item mb-80 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="history-img">
                    <Image
                      src="assets/images/gallery/history-5.jpg"
                      alt="history image"
                    />
                  </div>
                  <div className="history-content">
                    <h4 className="title">
                      <span className="ribbon"></span>Market Position
                    </h4>
                    <p>
                      We are recognized for in-depth audits, certification support, and Tailored Risk Management Solutions strategies, addressing the unique needs of high-rise structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start History Section ======*/}

      {/*====== Start Feedback Section ======*/}
      {/* <section className="testimonial-section pb-130">
        <div className="container">
          <div className="testimonial-wrapper-two light-gray-bg wow fadeInUp">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title section-title-left border-bottom-1 mb-40 pb-20">
                  <span className="sub-title">Client Testimonials</span>
                  <h2>What Our Customers Say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10">
                <Slider
                  {...testimonialSliderThree}
                  className="testimonial-slider-three"
                >
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <Image
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <Image
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <Image
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item-two d-flex">
                    <div className="quote">
                      <i className="flaticon-left-quote-1" />
                    </div>
                    <div className="testimonial-content">
                      <ul className="ratings">
                        <li>
                          <span className="title">Good Quality</span>
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p>
                        On the other hand, we denounce with righteous
                        indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment so
                        blinded by desire that they cannot foresee the pain and
                        trouble that are bound ensue and equal blame belongs to
                        those who fail in their duty through weakness.
                      </p>
                      <div className="author-thumb-title d-flex">
                        <div className="author-thumb">
                          <Image
                            src="assets/images/testimonial/thumb-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>Ronald B. Griffin</h4>
                          <p className="position">Business Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="col-lg-2">
                <div className="testimonial-dots" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Feedback Section ======*/}
    </Layout>
  );
};
export default About;
