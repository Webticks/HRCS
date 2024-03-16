import Link from "next/link";
import Image from "next/image";
const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 5:
      return <Footer5 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => (
  <footer className="footer-default footer-dark text-white p-r z-1">
    <div className="shape shape-one">
      <span />
    </div>
    <div className="shape shape-two">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="650px"
          height="242px"
        >
          <path
            fillRule="evenodd"
            opacity="0.02"
            fill="rgb(255, 255, 255)"
            d="M0.521,241.495 L246.454,37.867 L473.773,151.244 L649.198,0.638 L649.198,241.495 L0.521,241.495 Z"
          />
        </svg>
      </span>
    </div>
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Our Company</h4>
              <div className="footer-content">
                <p>
                  We are your dedicated partner in achieving fire and life safety compliance for high-rise buildings and smaller commercial or residential properties. Our mission is to transform the realm of safety and compliance in high-rise structures, ensuring a safer environment for all.
                </p>
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61555069300475&mibextid=cr9u03">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/high-rise-compliance-solutions-llc/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Services</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="compliance-audits">Compliance Audits</a>
                  </li>
                  <li>
                    <a href="fire-log-compliance">Fire Log Compliance</a>
                  </li>
                  <li>
                    <a href="certification-compliance">Certification Compliance</a>
                  </li>
                  <li>
                    <a href="inspection-services">Inspection Services</a>
                  </li>
                  <li>
                    <a href="risk-management">Risk Management</a>
                  </li>
                  <li>
                    <a href="safety-dashboard">Fire & Life Safety Dashboard</a>
                  </li>
                  <li>
                    <a href="sop">SOPs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
                <h5 className="title">Main Office</h5>
                <div className="contact-info-box d-flex mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>1401 21st Street Suite R Sacramento, CA 95811</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-widget-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image src="assets/images/logo/footer-logo-1.png" alt="" />
                    </a>
                  </Link>
                </div>
                <h5 className="title">Email Address</h5>
                <div className="contact-info-box d-flex mb-20">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:info@teamhrcs.com">info@teamhrcs.com</a>
                    </p>
                  </div>
                </div>
                <p>Copy@ 2024 HRCS. All Rights reserved by Webticks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}

    </div>
  </footer>
);

const Footer2 = () => (
  <footer className="footer-two text-white p-r z-1">
    <div className="shape shape-one">
      <span />
    </div>
    <div className="shape shape-two">
      <span />
    </div>
    <div className="shape shape-three">
      <span />
    </div>
    <div className="shape shape-four">
      <span />
    </div>
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        src="assets/images/logo/footer-logo-2.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  High Rise Compliance Solutions LLC is committed to leading the fire and life safety compliance sector.
                  Focused on expert knowledge, innovation, and client-centricity,
                  we prioritize elevating safety standards in high-rise buildings,
                  with a strategic emphasis on the San Francisco Bay Area.
                </p>
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61555069300475&mibextid=cr9u03">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/high-rise-compliance-solutions-llc/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Services</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="compliance-audits">Compliance Audits</a>
                  </li>
                  <li>
                    <a href="fire-log-compliance">Fire Log Compliance</a>
                  </li>
                  <li>
                    <a href="certification-compliance">Certification Compliance</a>
                  </li>
                  <li>
                    <a href="inspection-services">Inspection Services</a>
                  </li>
                  <li>
                    <a href="risk-management">Risk Management</a>
                  </li>
                  <li>
                    <a href="safety-dashboard">Fire & Life Safety Dashboard</a>
                  </li>
                  <li>
                    <a href="sop">SOPs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget mb-40 wow fadeInUp">
              <div className="footer-content">
                <h5 className="title">Main Office</h5>
                <div className="contact-info-box d-flex mb-40">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>1401 21st Street Suite R Sacramento, CA 95811</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright border-top-white-op-1">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-text text-center">
              <p>Copy@ 2024 HRCS. All Rights reserved by Webticks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer3 = () => (
  <footer className="footer-three text-white p-r z-1">
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        src="assets/images/logo/logo-3.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Resources</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">
                      Affiliate <span className="status">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget-two mb-40 wow fadeInUp">
              <h4 className="widget-title">Support</h4>
              <div className="footer-content">
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>1401 21st Street Suite R Sacramento, CA 95811</p>
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:info@teamhrcs.com">info@teamhrcs.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:+012(345)6789">+012 (345) 6789</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright border-top-white-op-1">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="footer-text">
              <p>Copy@ 2024 HRCS. All Rights reserved by Webticks</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-social-box text-center float-lg-right">
              <ul className="social-link">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61555069300475&mibextid=cr9u03">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/high-rise-compliance-solutions-llc/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer4 = () => (
  <footer className="footer-three p-r z-1">
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-80 pb-35">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        src="assets/images/logo/logo-4.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  But I must explain to you how all this mistaken denouncing
                  plesure and praising pain was born
                </p>
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61555069300475&mibextid=cr9u03">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/high-rise-compliance-solutions-llc/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Resources</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">
                      Affiliate <span className="status">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Company</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Sales</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget-two mb-40 wow fadeInUp">
              <h4 className="widget-title">Support</h4>
              <div className="footer-content">
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>1401 21st Street Suite R Sacramento, CA 95811</p>
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:info@teamhrcs.com">info@teamhrcs.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:+012(345)6789">+012 (345) 6789</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=== Footer Copyright ===*/}
    <div className="footer-copyright border-top-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="footer-text text-center">
              <p>Copy@ 2024 HRCS. All Rights reserved by Webticks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Footer5 = () => (
  <footer className="footer-three p-r z-1">
    <div className="container">
      {/*=== Footer Widget ===*/}
      <div className="footer-widget-wrapper pt-120 pb-35">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget about-company-widget-two mb-40 wow fadeInUp">
              <div className="footer-content">
                <div className="footer-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <Image
                        src="assets/images/logo/logo-4.png"
                        alt="Footer Logo"
                      />
                    </a>
                  </Link>
                </div>
                <p>
                  But I must explain to you how all this mistaken denouncing
                  plesure and praising pain was born
                </p>
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61555069300475&mibextid=cr9u03">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/high-rise-compliance-solutions-llc/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Resources</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">
                      Affiliate <span className="status">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
              <h4 className="widget-title">Company</h4>
              <div className="footer-content">
                <ul className="widget-nav">
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Sales</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget contact-info-widget-two mb-40 wow fadeInUp">
              <h4 className="widget-title">Support</h4>
              <div className="footer-content">
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-map-marker-alt" />
                  </div>
                  <div className="text">
                    <p>1401 21st Street Suite R Sacramento, CA 95811</p>
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:info@teamhrcs.com">info@teamhrcs.com</a>
                    </p>
                  </div>
                </div>
                <div className="contact-info-box d-flex mb-10">
                  <div className="icon">
                    <i className="far fa-phone" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="tel:+012(345)6789">+012 (345) 6789</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=== Footer Copyright ===*/}
    <div className="footer-copyright border-top-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="footer-text text-center">
              <p>Copy@ 2024 HRCS. All Rights reserved by Webticks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
