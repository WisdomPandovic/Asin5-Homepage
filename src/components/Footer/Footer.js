'use client'
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaWeixin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2>Newsletter</h2>
                        <p>Get the latest about SINC PARTNERS LAB, our startup Incubator program, Portfolio company offerings - straight into your inbox.
                        </p>
                        <div className="row">
                            <form className="col-8 g-0 p-3">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control bg-dark text-white"
                                        placeholder="Enter your email address"
                                        style={{ color: 'white', backgroundColor: '#343a40', borderColor: '#ced4da' }}
                                    />
                                    <button type="submit" className="btn btn-light">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><hr></hr>

                <div className="row">
                    <div className="col-md-9">
                        <div className="row py-4">
                            <div className="col-md-3">
                                <div className="justify-content-center align-items-center pt-5 pb-5">
                                    <div>
                                        <h5 className="text-left pb-3">Contact Us</h5>
                                        <p>Phone: 081 2874 2738</p>
                                        <p>Email: info@Rider.com</p>
                                        <p>Location: Lorem ipsum dolor sit, amet consectetur adipisicing elit. In odit eaque at sequi! Vitae, repellendus.</p>
                                        <div className="dk_foot_icon d-flex justify-content-center">
                                            <div className="mx-2"><FaInstagram /></div>
                                            <div className="mx-2"><FaFacebook /></div>
                                            <div className="mx-2"><FaTwitter /></div>
                                            <div className="mx-2"><FaLinkedin /></div>
                                            <div className="mx-2"><FaWeixin /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="pt-5 pb-5">
                                    <h5 className='pb-3'>Platforms</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">Lagos</li>
                                        <li className="mb-3">Abuja</li>
                                        <li className="mb-3">Calabar</li>
                                        <li className="mb-3">All Cities</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="pt-5 pb-5">
                                    <h5 className='pb-3'>Initiatives</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">Business Class</li>
                                        <li className="mb-3">First Class</li>
                                        <li className="mb-3">Comfort Class</li>
                                        <li className="mb-3">Mini & VIP VAN class</li>
                                        <li className="mb-3"><a className="nav-link" href="/our-classes">All Classes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="justify-content-center align-items-center pt-5 pb-5">
                                    <h5 className='pb-3'>About Us</h5>
                                    <p>We love to share new offers and <br />Exclusive Promotions</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control text-dark" id="email" name='email' placeholder="Your Email" required />
                                            <button type="submit" className="btn custom-bg text-white mt-2">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="justify-content-center align-items-center pt-5 pb-5">
                                    <h5 className='pb-3'>About Us</h5>
                                    <p>We love to share new offers and <br />Exclusive Promotions</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control text-dark" id="email" name='email' placeholder="Your Email" required />
                                            <button type="submit" className="btn custom-bg text-white mt-2">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="pt-5 pb-5">
                            <h5 className='pb-3'>Locations</h5>
                            <ul className="list-unstyled">
                                <li className="mb-3">Business Class</li>
                                <li className="mb-3">First Class</li>
                                <li className="mb-3">Comfort Class</li>
                                <li className="mb-3">Mini & VIP VAN class</li>
                                <li className="mb-3"><a className="nav-link" href="/our-classes">All Classes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
