import Link from "next/link";
import Slider from "react-slick";
import Index2Accordion from "../src/components/Index2Accordion";
import PartnerSlider2 from "../src/components/PartnerSlider2";
import ProgressBar from "../src/components/ProgressBar";
import LatestServices from "../src/components/slider/LatestServices";
import Layout from "../src/layout/Layout";
import Counter from "../src/components/Counter";
import Image from "next/image";
import {
  heroSliderOne,
  projectsSliderTwo,
  testimonialSliderFour,
} from "../src/sliderProps";

const Index = () => {
  return (
    <Layout header={2} footer={2} extraBodyCls="home-two">
      {/*====== Start Hero Section ======*/}
      <section className="banner-two">
        {/*=== Hero Slider ===*/}
        <Slider {...heroSliderOne} className="hero-slider-one">
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/slider/HRB.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    {/* <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    /> */}
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      High Rise Compliance Solutions
                    </span>
                    <h1>
                      <b>Compliance</b>
                      &nbsp;
                      <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>Unleashed</span>
                    </h1>
                    <h2>Safeguarding High-Rise Legacies</h2>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                      style={{ marginTop: '40px' }}
                    >
                      <Link legacyBehavior href="/services">
                        <a className="main-btn filled-btn filled-white">
                          Our Services
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/slider/HRB2.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    {/* <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    /> */}
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      High Rise Compliance Solutions
                    </span>
                    <h1>
                      <b>Compliance</b>
                      &nbsp;
                      <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>Unleashed</span>
                    </h1>
                    <h2>Safeguarding High-Rise Legacies</h2>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                      style={{ marginTop: '40px' }}
                    >
                      <Link legacyBehavior href="/services">
                        <a className="main-btn filled-btn filled-white">
                          Our Services
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Single Slider ===*/}
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/slider/HRB4.jpg)",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-10 col-lg-10">
                  {/*=== Hero Content ===*/}
                  <div className="hero-content text-white">
                    {/* <span
                      className="shape-bg"
                      data-animation="fadeInLeft"
                      data-delay=".8s"
                    /> */}
                    <span
                      className="tag-line"
                      data-animation="fadeInUp"
                      data-delay=".4s"
                    >
                      High Rise Compliance Solutions
                    </span>
                    <h1>
                      <b>Compliance</b>
                      &nbsp;
                      <span style={{ color: 'transparent', WebkitTextStroke: '2px white' }}>Unleashed</span>
                    </h1>
                    <h2>Safeguarding High-Rise Legacies</h2>
                    <div
                      className="hero-button"
                      data-animation="fadeInUp"
                      data-delay=".8s"
                      style={{ marginTop: '40px' }}
                    >
                      <Link legacyBehavior href="/services">
                        <a className="main-btn filled-btn filled-white">
                          Our Services
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}

      {/*====== Start Service section ======*/}
      <section className="pt-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-12">
              <div className="section-title text-center wow fadeInDown">
                <span className="sub-title">Logbook</span>
                <h5>
                  Our service simplifies and streamlines fire safety record-keeping, ensuring compliance with the latest regulations for facility safety.
                </h5>
              </div>
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-xl-3 col-lg-12">
              <div className="service-item-list ml-minus-40">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInLeft">
                      <div className="icon">
                        <i className="flaticon-friend" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/certification-compliance">
                            <a>Consulting Services</a>
                          </Link>
                        </h3>
                        <p>
                          Comprehensive consulting for high-rise building compliance.
                        </p>
                        <Link legacyBehavior href="/certification-compliance">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInRight">
                      <div className="icon">
                        <i className="flaticon-problem-solving" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/labor-solutions">
                            <a>Technical labour solution</a>
                          </Link>
                        </h3>
                        <p>
                          Technical labor solutions catering to the unique needs of high-rise buildings.
                        </p>
                        <Link legacyBehavior href="/labor-solutions">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="service-one_image-box text-center mb-20 p-r z-1 wow fadeInDown">
                <Image
                  src="assets/images/service/logbook.png"
                  className="service-one-img"
                  alt="Service Image"
                />
                <div className="shape border-circle">
                  <span />
                </div>
                <div className="dot-shape dot-shape1 animate-float-x">
                  <span />
                </div>
                <div className="dot-shape dot-shape2 animate-float-y">
                  <span />
                </div>
                <div className="dot-shape dot-shape3 animate-float-x">
                  <span />
                </div>
                <div className="dot-shape dot-shape4 animate-float-y">
                  <span />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-12">
              <div className="service-item-list mr-minus-40">
                <div className="row">
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInLeft">
                      <div className="icon">
                        <i className="flaticon-profit" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/fire-log-compliance">
                            <a>Fire safety log management</a>
                          </Link>
                        </h3>
                        <p>
                          Efficient fire safety log management services.
                        </p>
                        <Link legacyBehavior href="/fire-log-compliance">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                    <div className="service-item-four animate-hover-icon mb-20 wow fadeInRight">
                      <div className="icon">
                        <i className="flaticon-target" />
                      </div>
                      <div className="text">
                        <h3 className="title">
                          <Link legacyBehavior href="/compliance-audits">
                            <a>Compliance audits</a>
                          </Link>
                        </h3>
                        <p>
                          Expertise in conducting compliance audits for high-rise structures.
                        </p>
                        <Link legacyBehavior href="/compliance-audits">
                          <a className="btn-link">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      {/*====== End Service section ======*/}


      {/*====== Start Service Section ======*/}
      <section
        className="service-section bg_cover pt-125 p-r z-1 pb-150 mt-50"
        style={{ backgroundImage: "url(assets/images/bg/service-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center text-white mb-60 wow fadeInDown">
                <span className="sub-title">Latest Services</span>
                <h2>Amazing Business Services</h2>
              </div>
            </div>
          </div>
          {/*=== Service Slider ===*/}
          <LatestServices />
        </div>
      </section>
      {/*====== End Service Section ======*/}

      {/*====== Start Fact Section ======*/}
      <section className="fact-section p-r z-1 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              {/*=== Fact image box ===*/}
              <div className="fact-img_one-box text-right pr-lg-70 mb-50">
                <div className="quote-box-three text-left wow fadeInLeft z-1">
                  <h3>
                    We Have 25 Years Of Experience in Business Consulting
                    Services
                  </h3>
                  <div className="author-thumb-title d-flex align-items-center">
                    <div className="author-thumb">
                      <Image
                        src="assets/images/author-1.jpg"
                        alt="Author Image"
                      />
                    </div>
                    <div className="author-title">
                      <h4 className="title">Joseh G. Coleman</h4>
                      <p className="position">CEO &amp; Founder</p>
                    </div>
                  </div>
                </div>
                <Image
                  src="assets/images/services/missionImg.png"
                  className="wow fadeInDown"
                  alt="Fact image"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              {/*=== Fact content Box ===*/}
              <div className="fact-one_content-box mb-10">
                <div className="section-title section-title-left wow fadeInDown">
                  <span className="sub-title">Our Mission</span>
                  <h2>Safety Elevated Excellence</h2>
                </div>
                <p className="wow fadeInUp">
                High Rise Compliance Solutions LLC ensures safety through tailored risk management for buildings. Our expertise leads in fire & life safety compliance, empowering stakeholders for a secure work environment. As a trusted partner, we ensure regulatory compliance, streamline operations, and address emerging fire & life safety needs. Upholding integrity, transparency, and sustainability, we prioritize our team&apos;s well-being and professional growth. Through competitive benefits and ongoing training, we deliver exceptional solutions, contributing to a safer world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fact Section ======*/}

      {/*====== Start About Section ======*/}
      <section className="about-section-two pt-100 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-four_image-box p-r z-1">
                <Image
                  src="assets/images/about/about3.png"
                  className="about-img-one wow fadeInDown"
                  alt="About Image"
                />
                <Image
                  src="assets/images/about/about1.png"
                  className="about-img-two wow fadeInLeft"
                  alt="About Image"
                />
                <Image
                  src="assets/images/about/about2.png"
                  className="about-img-three wow fadeInUp"
                  alt="About Image"
                />
                <div className="shape fancy-shape-one">
                  <span />
                </div>
                <div className="shape shape-one animate-float-x">
                  <span>
                    <Image src="assets/images/shape/pattern-bg-2.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap pl-lg-50 wow fadeInRight">
                <div className="section-title section-title-left">
                  <span className="sub-title">About Company</span>
                  <h2>Elevated Safety Solutions</h2>
                </div>
                <p>
                  High Rise Compliance Solutions leads in high-rise safety and compliance. Our focus: service expansion, tech enhancement, and market strength. Partner with us for innovative, tailored solutions in regulatory compliance and property resilience.                </p>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <div className="features-item-four animate-hover-icon text-center wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-search" />
                      </div>
                      <div className="text">
                        <h4 className="title">User Research</h4>
                        <p>
                          Enhancing high-rise safety with innovative solutions and client-focused expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="features-item-four animate-hover-icon text-center wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-idea-1" />
                      </div>
                      <div className="text">
                        <h4 className="title">Unique Ideas</h4>
                        <p>
                          Revolutionary Safety Innovations for Unparalleled High-Rise Compliance Solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}

      {/*====== Start Advantage Section ======*/}
      <section
        className="advantage-section bg_cover pt-100 pb-130"
        style={{ backgroundImage: "url(assets/images/bg/advantage-bg.jpg)" }}
      >
        <div className="container">
          {/*====== Skill Section ======*/}
          <div className="skill-area">
            <div className="row align-items-end">
              <div className="col-lg-5">
                {/*=== Common Heading ===*/}
                <div className="section-title section-title-left mb-50 wow fadeInLeft">
                  <span className="sub-title">Advantages</span>
                  <h2>Best Solutions for Your Consultations</h2>
                </div>
              </div>
              <div className="col-lg-7">
                {/*=== Single Content Box ===*/}
                <div className="skill-content-box wow fadeInRight">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={85} color="#EDC254" />
                        <div className="text">
                          <h3 className="title">Business Consulting</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-skill-item d-flex align-items-center mb-60">
                        <ProgressBar value={67} color="#EDC254" />
                        <div className="text">
                          <h3 className="title">Compliance Audits</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*====== FAQ Section ======*/}
          <div className="faq-area">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Faq Accordion ===*/}
                <Index2Accordion />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== Start Advantage Section ======*/}

      {/*====== Start Feedback Section ======*/}
      <section className="testimonial-section-variable-width pt-120">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center wow fadeInDown">
                <span className="sub-title">Our Testimonials</span>
                <h2>What Our Clients Say About Us</h2>
              </div>
            </div>
          </div>
          <Slider
            {...testimonialSliderFour}
            className="testimonial-slider-four wow fadeInUp"
          >
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <Image
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    David T. Williams,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <Image
                    src="assets/images/testimonial/thumb-6.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    Joseph P. Brewer,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <Image
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    David T. Williams,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <Image
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    Joseph P. Brewer,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="testimonial-item-four">
              <div className="testimonial-inner-content">
                <div className="author-thumb">
                  <Image
                    src="assets/images/testimonial/thumb-5.jpg"
                    alt="Author Thumb"
                  />
                </div>
                <div className="testimonial-content">
                  <p>
                    Sed ut perspiciatis unde omnis natus errvoluptatem
                    accusantium doloremque laudantium totam rem aperiam eaque
                    abillo inventorey veritatis et architecto beatae vitae dicta
                    sunt explicabo
                  </p>
                  <h5 className="author-title">
                    Joseph P. Brewer,{" "}
                    <span className="position">Senior Designer</span>
                  </h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Feedback Section ======*/}

      {/*====== Start Contact Section ======*/}
      <section className="contact-section p-r pt-60 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {/*=== Map Content Box ===*/}
              <div className="map-one_content-box mb-50 wow fadeInDown">
                <div className="section-title section-title-left mb-50">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Request for Proposal</h2>
                </div>
                <div className="map-box">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/*=== Contact Form Box ===*/}
              <div className="contact-two_form-box mb-50 wow fadeInUp">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name"
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Company Name"
                          name="name"
                          required=""
                        />
                        <i className="far fa-user" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                        <i className="far fa-envelope-open-text" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone"
                          required=""
                        />
                        <i className="fal fa-mobile-alt" />
                      </div>
                    </div>

                    <div className="col-lg-12" >
                      <label htmlFor="check1">
                        <span>
                          What service or system are you interested in?
                        </span>
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <select id="check1" name="serviceSelection" className="custom-select">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div className="col-lg-12">
                      <label htmlFor="check1">
                        <span>
                          How did you hear about us?
                        </span>
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <select id="check1" name="serviceSelection" className="custom-select">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>

                    <div className="col-lg-12">
                      <label htmlFor="check1">
                        <span>
                          State
                        </span>
                      </label>
                    </div>
                    <div className="col-lg-12">
                      <select id="check1" name="serviceSelection" className="custom-select">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        {/* Add more options as needed */}
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_checkbox">
                        <input type="checkbox" name="checkbox" id="check1" />
                        <label htmlFo r="check1">
                          <span>
                            I Agree with the service and terms and conditions
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="main-btn btn-red">
                          Get Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-section bg-color-two pt-50 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-12">
              {/*=== Common Heading ===*/}
              <div className="section-title section-title-white wow fadeInLeft">
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12">
              {/*=== Newsletter Form ===*/}
              <div className="newsletter-from wow fadeInRight">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Enter Email Address"
                          name="email"
                        />
                        <i className="far fa-envelope" />
                      </div>
                      <div className="form_checkbox">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="check2"
                          defaultChecked=""
                        />
                        <label htmlFor="check2">
                          <span>
                            I agree to the <a href="#"> Privacy Policy</a>.
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-button float-lg-right">
                        <button className="main-btn btn-red">
                          Subscribe Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};
export default Index;

