import React from 'react';
import styles from './ConceptInnovation.module.css';
import Image from 'next/image';

const ConceptInnovation = () => {
    return (
        <div className="container py-4">
            <div className={styles.focusSection}>
                <h2 className="text-center lh-1 fs-4 mb-4 mt-5">
                    Our 5 Concept Innovations
                </h2>
                <p className='pb-5'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body text-center">
                            <p className="card-text text-center fw-bold">Service Incubator</p>
                            <div className="d-flex justify-content-center mb-5">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text text-center fw-bold">Service Acceleration</p>
                            <div className="d-flex justify-content-center mb-5">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text text-center fw-bold">Virtualting</p>
                            <div className="d-flex justify-content-center mb-5">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text text-center fw-bold">Dimming</p>
                            <div className="d-flex justify-content-center mb-5">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text text-center fw-bold">Mastathon</p>
                            <div className="d-flex justify-content-center mb-5">
                                <Image
                                    src="/images/01.jpg"
                                    alt="Startup Image"
                                    width={100}
                                    height={100}
                                    className="rounded-circle"
                                />
                            </div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConceptInnovation;
