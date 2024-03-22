import React, { useRef, useState, useEffect } from 'react';
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
        interested: '',
        hear_about_us: '',
        state: '',
        checkbox: false
    });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            emailjs.sendForm('service_5cgcr58', 'template_gujh30r', form.current, 'Cqu8TYI1jHmp-mkB4')
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setIsSubmitted(true);
                        resetForm();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } catch (error) {
            console.log('Error occurred:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        form.current.reset();
    };

    const handleOptionClick = (option) => {
        setFormData({ ...formData, hear_about_us: option });
    };

    const handleInterested = (option) => {
        setFormData({ ...formData, interested: option });
    };

    return (
        <div style={{ position: 'relative' }}>
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

                    <div className="col-lg-12">
                        <div className="form_group">
                            <input
                                type="text"
                                className="form_control"
                                placeholder="Enter your State"
                                name="state"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                required
                            />
                            <i className="far fa-building" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form_group">
                            <input
                                type="text"
                                className="form_control"
                                placeholder="How did you hear about us?"
                                name="hear_about_us"
                                value={formData.hear_about_us}
                                onChange={(e) => setFormData({ ...formData, hear_about_us: e.target.value })}
                                required
                                style={{ marginBottom: '10px' }}
                            />
                            <i className="fas fa-bullhorn" />
                        </div>
                        <div className="row">
                            <ul className="col-sm-6" style={{ listStyleType: 'none', padding: '0', margin: '0px 0px 0px 0px' }}>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleOptionClick("Web Search")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Web Search</li>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleOptionClick("Client Referral")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Client Referral</li>
                            </ul>
                            <ul className="col-sm-6" style={{ listStyleType: 'none', padding: '0', margin: '0px 0px 15px 0px' }}>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleOptionClick("Facebook")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Facebook</li>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleOptionClick("LinkedIn")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; LinkedIn</li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-12">
                        <div className="form_group">
                            <input
                                type="text"
                                className="form_control"
                                placeholder="What service or system are you interested in?"
                                name="interested"
                                value={formData.interested}
                                onChange={(e) => setFormData({ ...formData, interested: e.target.value })}
                                required
                                style={{ marginBottom: '10px' }}
                            />
                            <i className="fas fa-toolbox" />
                        </div>
                        <div className="row">
                            <ul className="col-sm-6" style={{ listStyleType: 'none', padding: '0', margin: '0px 0px 0px 0px' }}>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleInterested("Compliance Audits")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Compliance Audits</li>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleInterested("Fire Log Management")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Fire Log Management</li>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleInterested("Certification Compliance")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Certification Compliance</li>
                            </ul>
                            <ul className="col-sm-6" style={{ listStyleType: 'none', padding: '0', margin: '0px 0px 15px 0px' }}>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleInterested("Inspection Services")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Inspection Services</li>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleInterested("Risk Management")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Risk Management</li>
                                <li style={{ fontSize: 'smaller', cursor: 'pointer' }} onClick={() => handleInterested("Fire & Life Safety Dashboard")} onMouseEnter={(e) => e.target.style.color = '#EDC254'} onMouseLeave={(e) => e.target.style.color = 'black'}>&#10003; Fire & Life Safety Dashboard</li>
                            </ul>
                        </div>
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
        </div>
    );
};

export default ContactUsForm;