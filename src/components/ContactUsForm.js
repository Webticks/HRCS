import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        full_name: '',
        company_name: '',
        email: '',
        phone_number: '',
        interested: 'Compliance Audits',
        hear_about_us: 'Web Search',
        state: 'AZ',
        checkbox: false
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formElement = document.querySelector('.contact-form');
            const oldFormData = formElement.innerHTML;
            let interestedValue;
            console.log("formElement2:", formElement);
            for (const child of formElement.children) {
                if (!interestedValue && child.querySelector('[name="interested"]')) {
                    interestedValue = child.querySelector('.nice-select .current').textContent.trim();
                    console.log("interestedValue1:", interestedValue);
                }
            }

            console.log("interestedValue:", interestedValue);
            console.log("formElement2:", formElement);

            const newFormHTML = `
                <form>
                    <input name="full_name" value="${formData.full_name}">
                    <input name="company_name" value="${formData.company_name}">
                    <input name="email" value="${formData.email}">
                    <input name="phone_number" value="${formData.phone_number}">
                    <input name="interested" value="${interestedValue}">
                    <input name="hear_about_us" value="${formData.hear_about_us}">
                    <input name="state" value="${formData.state}">
                </form>
            `;

            formElement.innerHTML = newFormHTML;

            const result = await emailjs.sendForm('service_yv1l1sn', 'template_7jeygv3', formElement, 'BSMdByZGi6bl1MH4N');
            console.log(result.text);
            formElement.innerHTML = oldFormData;            
            setIsSubmitted(true);
        } catch (error) {
            console.log(error.text);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            {isLoading && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}>
                    <div style={{
                        border: '8px solid #f3f3f3',
                        borderTop: '8px solid #3498db',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        animation: 'spin 2s linear infinite',
                    }} />
                </div>
            )}
            {!isLoading && (
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
                                    value={formData.full_name}
                                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
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
                                    value={formData.company_name}
                                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
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
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                    value={formData.phone_number}
                                    onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                    required
                                />
                                <i className="fal fa-mobile-alt" />
                            </div>
                        </div>

                        <div className="col-lg-12" >
                            <label    >
                                <span>
                                    What service or system are you interested in?
                                </span>
                            </label>
                        </div>
                        <div className="col-lg-12">
                            <select
                                value={formData.interested}
                                onChange={(e) => setFormData({ ...formData, interested: e.target.value })}
                                name="interested"
                                className="custom-select"
                                required>
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
                            <label    >
                                <span>
                                    How did you hear about us?
                                </span>
                            </label>
                        </div>
                        <div className="col-lg-12">
                            <select
                                value={formData.hear_about_us}
                                onChange={(e) => setFormData({ ...formData, hear_about_us: e.target.value })}
                                name="hear_about_us"
                                className="custom-select"
                                required>
                                <option value="Web Search">Web Search</option>
                                <option value="Client Referral">Client Referral</option>
                                <option value="Facebook">Facebook</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Other">Other</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>

                        <div className="col-lg-12">
                            <label style={{ marginTop: '20px' }}>
                                <span>
                                    State
                                </span>
                            </label>
                        </div>
                        <div className="col-lg-12">
                            <select
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                name="state"
                                className="custom-select"
                                required>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
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

                                onChange={(e) => {
                                    console.log('Checkbox checked:', e.target.checked);
                                }}
                                style={{ marginRight: '8px', cursor: "pointer", transform: 'scale(1.5)' }}
                                required
                            />
                            <label    >
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
            )}
        </div>
    );
};

export default ContactUsForm;