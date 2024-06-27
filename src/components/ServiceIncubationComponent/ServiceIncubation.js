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
                <p className='p3-5'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
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
                            <p className="card-text pt-3" style={{ minHeight: '60px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <BsSquare />
                            <p className="card-text pt-3" style={{ minHeight: '60px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas .</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card border-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2l6 3v6l-6 3-6-3V5l6-3zM7 5v6l5 2.5V7L7 5z" />
                            </svg>
                            <p className="card-text pt-3" style={{ minHeight: '60px' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas .</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceIncubation;
