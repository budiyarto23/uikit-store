import React from 'react';
import './footer.scss';
import Logo from 'assets/images/logo-dummy.svg';

export default function Footer() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#FFF", borderTop: "1px solid #EEE" }}>
            <div className="container margin-mobile">
                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <div className="d-flex flex-column">
                                <img src={Logo} alt="logo" className="footer-logo" />
                                <div className="frame-footer-text-hightlight">
                                    <p className="footer-text-hightlight">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                                </div>
                                <p className="footer-allrights">© 2021 - budiyarto.com. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-4 col-xl-4">
                            <div className="d-flex flex-column">
                                <p className="footer-title">Company</p>
                                <p className="footer-points"><a href="/payment-confirm">About Us</a></p>
                                <p className="footer-points"><a href="/payment-confirm">Support</a></p>
                                <p className="footer-points"><a href="/payment-confirm">Be A Contributor</a></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                            <div className="d-flex flex-column">
                                <p className="footer-title">Contact Us</p>
                                <p className="footer-points"><a href="mailto:ahmadbudiyarto@gmail.com" target="_blank" rel="noreferrer">ahmadbudiyarto@gmail.com</a></p>
                                <p className="footer-points"><a href="tel:+622122081996" target="_blank" rel="noreferrer">+62 856 4044 0802</a></p>
                                <p className="footer-points"><a href="/payment-confirm" target="_blank" rel="noreferrer">Instagram</a></p>
                                <p className="footer-points"><a href="/payment-confirm" target="_blank" rel="noreferrer">LinkedIn</a></p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
