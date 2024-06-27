'use client'
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaWeixin, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

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
                    <div className="col-md-12">
                        <div className="row py-4">
                            <div className="col-md-2">
                                <div className="justify-content-center align-items-center pt-5 pb-5">
                                    <div>
                                        <Image
                                            src="/images/sign.png"
                                            alt="/"
                                            width={10}
                                            height={50}
                                            className="card-img-top mb-3 white-image"
                                        />
                                        <p>SINC Partners Lab is a SaaS and a Marketing Tech startup studio building platform-based products for solution-providers and entrepreneurs that will help democratize success
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="pt-5 pb-5">
                                    <h5 className='pb-3'>Platforms</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">Kofoundme</li>
                                        <li className="mb-3">InResidences</li>
                                        <li className="mb-3">Service Market</li>
                                        <li className="mb-3">Founder School</li>
                                        <li className="mb-3">Metty</li>
                                        <li className="mb-3">Grantty</li>
                                        <li className="mb-3">SBO</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="pt-5 pb-5">
                                    <h5 className='pb-3'>Initiatives</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">Jabi Plains</li>
                                        <li className="mb-3">Local Pricing Initiative</li>
                                        <li className="mb-3">Scholarship Program</li>
                                        <li className="mb-3">School Pricing Program</li>
                                        <li className="mb-3"><a className="nav-link" href="/our-classes">University STEM</a></li>
                                        <li className="mb-3">University InResidency </li>
                                        <li className="mb-3">Founder Festival </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="justify-content-center align-items-center pt-5 pb-5">
                                    <h5 className='pb-3'>About Us</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">Who We Are</li>
                                        <li className="mb-3">Our People</li>
                                        <li className="mb-3">Companies</li>
                                        <li className="mb-3">Career</li>
                                        <li className="mb-3">Resources</li>
                                        <li className="mb-3">Blog & FAQ</li>
                                        <li className="mb-3">Contact</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="justify-content-center align-items-center pt-5 pb-5">
                                    <h5 className='pb-3'>Others</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">SIP</li>
                                        <li className="mb-3">SEEQ</li>
                                        <li className="mb-3">Deals</li>
                                        <li className="mb-3">Job</li>
                                        <li className="mb-3">Investors</li>
                                        <li className="mb-3">Hacker News</li>
                                        <li className="mb-3">Press</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-2 border-left" style={{ borderLeft: '2px solid white' }}>
                                <div className="pt-5 pb-5 pl-4">
                                    <h5 className='pb-3'>Locations</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">Abuja, Nigeria </li>
                                        <li className="mb-3">Lagos, Nigeria </li>
                                        <li className="mb-3">Philadelphia, USA</li>
                                        <li className="mb-3">Mini & VIP VAN class</li>
                                        <li className="mb-3"><a className="nav-link" href="/our-classes">All Classes</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><hr />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'></div>
                    <p className='col-lg-4 text-center'>You are guaranteed a 2x on your service or cash investment if you are first to invest</p>
                    <div className='col-lg-4 d-flex align-items-center'>
                        <Image
                            src="/images/nike.png"
                            alt="/"
                            width={10}
                            height={50}
                            className="card-img-top mb-3 white-image"
                        />
                        <p style={{ marginLeft: '15px' }}>We are a business built on the foundation of Christian values and belief</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <p> ©
                            2023 SINC Partners Lab Ltd. All rights reserved</p>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <ul className="list-unstyled d-flex">
                            <li className="mb-3"><a className="text-white" href="">Privacy Policy</a></li>
                            <li className="mb-3" style={{ marginLeft: '15px', marginRight: '15px' }}><a className="text-white" href="">Terms of Service</a></li>
                            <li className="mb-3"><a className="text-white" href="">Security</a></li>
                        </ul>

                    </div>
                    <div className='col-lg-4 '>
                        <div className="dk_foot_icon d-flex justify-content-center align-items-center">
                        <div className="mx-2"><FaFacebook /></div>
                        <div className="mx-2"><FaTwitter /></div>
                            <div className="mx-2"><FaInstagram /></div>
                            <div className="mx-2"><FaLinkedin /></div>
                            <div className="mx-2"><FaWeixin /></div>
                            <div className="mx-2"><FaYoutube /></div>
                        </div> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
