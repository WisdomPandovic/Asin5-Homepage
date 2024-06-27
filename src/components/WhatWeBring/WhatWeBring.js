// src/components/WhatWeBring.js

import React from 'react';
import Image from 'next/image';
import styles from './WhatWeBring.module.css';

const WhatWeBring = () => {
    return (
        <div className="container py-4 ">
            <div className={styles.focusSection}>
                <h2 className="text-center lh-1 fs-4 mb-4 mt-5">
                    What We Bring
                </h2>
                <p className='pb-5'>We empower visioners to build the future with us and we provide</p>
            </div>
            <div className="row">
                <div className="col-lg-3 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D', height: '300px' }}>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title mt-3">01</h3>
                            <p className="card-text flex-grow-1" style={{ minHeight: '60px' }}>Validated Business Opportunity</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D', height: '300px' }}>
                        <div className="card-body">
                            <h5 className="card-title mt-3">02</h5>
                            <h5 className="card-text" style={{ minHeight: '60px' }}> 99.99%</h5>
                            {/* <h4 className="fs-6">product solving a problem for service providers and entrepreneurs</h4> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D', height: '300px' }}>
                        <div className="card-body">
                            <h5 className="card-title mt-3">03</h5>
                            <p className="card-text" style={{ minHeight: '60px' }}>Dedicated Team</p>
                            {/* <p>ready from day one</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D', height: '300px' }}>
                        <div className="card-body">
                            <h5 className="card-title mt-3">04</h5>
                            <p className="card-text" style={{ minHeight: '60px' }}>Extensive Network & Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeBring;
