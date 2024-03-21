import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm('service_yv1l1sn', 'template_7jeygv3', form.current, 'BSMdByZGi6bl1MH4N')
            .then((result) => {
                console.log(result.text);
                setIsSubmitted(true);
                resetForm();
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const resetForm = () => {
        form.current.reset();
    };

    return (
        <form
            ref={form} onSubmit={sendEmail}
            className="contact-form"
        >
            <div className="row">
                <div className="col-lg-12">
                    <div className="form_group">
                        <input
                            type="text"
                            className="form_control"
                            placeholder="Full Name"
                            name="full_name"
                            required
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
                            name="company_name"
                            required
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
                            required
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
                            name="phone_number"
                            required
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
                    <select id="check1" name="interested" className="custom-select" required>
                        <option value="Compliance Audits">Compliance Audits</option>
                        <option value="Fire Log Management">Fire Log Management</option>
                        <option value="Certification Compliance">Certification Compliance</option>
                        <option value="Inspection Services ">Inspection Services </option>
                        <option value="Risk Management ">Risk Management </option>
                        <option value="Fire & Life Safety Dashboard ">Fire & Life Safety Dashboard </option>
                        <option value="SOPs">SOPs</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="col-lg-12" style={{ marginTop: '20px' }}>
                    <label htmlFor="check1">
                        <span>
                            How did you hear about us?
                        </span>
                    </label>
                </div>
                <div className="col-lg-12">
                    <select id="check1" name="hear_about_us" className="custom-select" required>
                        <option value="Web Search">Web Search</option>
                        <option value="Client Referral">Client Referral</option>
                        <option value="Facebook">Facebook</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Other">Other</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="col-lg-12">
                    <label htmlFor="check1" style={{ marginTop: '20px' }}>
                        <span>
                            State
                        </span>
                    </label>
                </div>
                <div className="col-lg-12">
                    <select id="check1" name="state" className="custom-select" required>
                        <option value="AZ">CA</option>
                        <option value="CA">AZ</option>
                        <option value="NV">NV</option>
                        <option value="OR">OR</option>
                        <option value="TX">TX</option>
                        <option value="WA">WA</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="col-lg-12" style={{ display: 'flex', alignItems: 'center', margin: '25px 0px' }}>
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="check1"
                        onChange={(e) => {
                            console.log('Checkbox checked:', e.target.checked);
                        }}
                        style={{ marginRight: '8px', cursor: "pointer", transform: 'scale(1.5)' }}
                        required
                    />
                    <label htmlFor="check1">
                        <span>
                            I Agree with the service and terms and conditions
                        </span>
                    </label>
                </div>

                <div className="col-lg-12">
                    <div className="form_group">
                        <button className="main-btn btn-red" type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Request Consultation'}
                        </button>
                    </div>
                </div>

                {isSubmitted && (
                    <div className="popup"
                        style={{
                            marginTop: '20px',
                            backgroundColor: '#EDC254',
                            color: '#fff',
                            padding: '5px 12px',
                            borderRadius: '6px',
                            fontSize: '19px',
                        }}>
                        <span className="popup-text">Request for consultation submitted successfully!</span>
                    </div>
                )}

            </div>
        </form>
    );
};

export default ContactUsForm;