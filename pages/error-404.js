import Link from "next/link";
import Image from "next/image";
const Error404 = () => {
  return (
    <section className="error-404-section p-r z-1">
      <div className="shape shape-one animate-float-x">
        <span className="animate-float-x">
          <Image src="assets/images/shape/shape-1.png" alt="" />
        </span>
      </div>
      <div className="shape shape-two animate-float-y">
        <span>
          <Image src="assets/images/shape/shape-2.png" alt="" />
        </span>
      </div>
      <div className="shape shape-three animate-float-y">
        <span>
          <Image src="assets/images/shape/shape-3.png" alt="" />
        </span>
      </div>
      <div className="shape shape-four animate-float-x">
        <span>
          <Image src="assets/images/shape/shape-4.png" alt="" />
        </span>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-404-wrapper text-center pt-100 pb-100">
              <div className="error-content">
                <div className="error-img mb-30">
                  <Image src="assets/images/gallery/error.png" alt="404 image" />
                </div>
                <h2>OPPS! This Page Are Not Found</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantiumtotam rem eaque inventore
                  veritatis architecto beatae.
                </p>
                <div className="error-button">
                  <Link href="/" legacyBehavior>
                    <a className="main-btn btn-red"> Go to Home</a>
                  </Link>
                  <a href="tel:(925) 294-0613" className="call-button">
                    <i className="fas fa-headset" />
                    (925) 294-0613
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Error404;
