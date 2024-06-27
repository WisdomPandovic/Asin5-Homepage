import React from 'react';
import Image from 'next/image';
import styles from './IncubationProgramme.module.css';

const IncubationProgramme = () => {
    return (
        <div className="mt-5 py-4 bg-gray">
            <div className='container incubator-container'>
                <div className="text-center pt-5 mb-5">
                    <h2>Our Service Incubation Programme</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0 bg-white">
                            <div className="p-3 mb-3">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className={`card-body ${styles.fixedHeight}`}>
                                <h5 className="card-title">Source Ideas & Ideate</h5>
                                <p className="card-text ">We come up with our own ideas internally and/or take in exceptional entrepreneurs with ideas within or outside our thesis area into our Service incubation Program (SIP) yearly, then run them through our idea-focus-test (IFT) for fit. We quickly build a 5-10 functionality nano MVP or a lead page built for idea visualization</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0">
                        <div className="p-3 mb-3">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className={`card-body ${styles.fixedHeight}`}>
                                <h5 className="card-title">Setup A Team</h5>
                                <p className="card-text">We take in technical and business cofounders into the portfolio company offering 25% each and a total of 50% stake in the company while we keep 50% as the other cofounder.
                                    We then put together 6-10 people on-demand remote team (who are service incubators) to help build, launch and validate the MVP with 250 functionalities, worth $25k for a 10% stake.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card border-0">
                        <div className="p-3 mb-3">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <div className={`card-body ${styles.fixedHeight}`}>
                                <h5 className="card-title">Fast Experiment</h5>
                                <p className="card-text">We quickly test the selected ideas by taking them through our 4 Weeks Founder School Sprint and extending the product to a Micro-MVP (mMVP) which may be between 10-30 functionality app to test the idea for market acceptance. After the 4 weeks test, we drop the ones that don’t work or timing is not right, then we continue MVP development for those that we think has a future</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncubationProgramme;
