import React from 'react';
import styles from './ServiceIncubation.module.css';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { BsSquare } from 'react-icons/bs';

const ServiceIncubation = () => {
    return (
        <div className="container py-4">
            <div className={styles.focusSection}>
                <h2 className="text-center lh-1 fs-4 mb-3 mt-5">
                    Our Service Incubation Model
                </h2>
                <p className='p3-5'>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
                <a href="#" className=" text-center text-dark fw-bold">
                    Become A Service Incubation Model <BsArrowRight className="ms-2" />
                </a>
                <h3 className="text-center lh-1 fs-4 mb-4 mt-5">
                    Our Service Incubation Hypothesis
                </h3>
            </div>
            <div className="row pt-4">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <BsSquare />
                            <p className="card-text h-300 pt-3" style={{ minHeight: '60px' }}>Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <BsSquare />
                            <p className="card-text h-300 pt-3" style={{ minHeight: '60px' }}>
                                If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2l6 3v6l-6 3-6-3V5l6-3zM7 5v6l5 2.5V7L7 5z" />
                            </svg>
                            <p className="card-text h-300 pt-3" style={{ minHeight: '60px' }}>
                                Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceIncubation;
