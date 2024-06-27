// import React from 'react';
// import styles from './ConceptInnovation.module.css';
// import Image from 'next/image';

// const ConceptInnovation = () => {
//     return (
//         <div className="container py-4">
//             <div className={styles.focusSection}>
//                 <h2 className="text-center lh-1 fs-4 mb-4 mt-5">
//                     Our 5 Concept Innovations
//                 </h2>
//                 <p className='pb-5'>We have five (5) proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
//             </div>
//             <div className="row no-gutters">
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body text-center h-500">
//                             <p className="card-text text-center fw-bold">Service Incubator</p>
//                             <div className="d-flex justify-content-center mb-5">
//                                 <Image
//                                     src="/images/01.jpg"
//                                     alt="Startup Image"
//                                     width={100}
//                                     height={100}
//                                     className="rounded-circle"
//                                 />
//                             </div>
//                             <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body text-center h-500">
//                             <p className="card-text text-center fw-bold">Service Acceleration</p>
//                             <div className="d-flex justify-content-center mb-5">
//                                 <Image
//                                     src="/images/01.jpg"
//                                     alt="Startup Image"
//                                     width={100}
//                                     height={100}
//                                     className="rounded-circle"
//                                 />
//                             </div>
//                             <p> A service-for-shares model for helping early stage startups with product and market validation scale with marketing using a media platform, influencer network or distribution network </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body text-center h-500">
//                             <p className="card-text text-center fw-bold">Virtualting</p>
//                             <div className="d-flex justify-content-center mb-5">
//                                 <Image
//                                     src="/images/01.jpg"
//                                     alt="Startup Image"
//                                     width={100}
//                                     height={100}
//                                     className="rounded-circle"
//                                 />
//                             </div>
//                             <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body text-center h-500">
//                             <p className="card-text text-center fw-bold">Dimming</p>
//                             <div className="d-flex justify-content-center mb-5">
//                                 <Image
//                                     src="/images/01.jpg"
//                                     alt="Startup Image"
//                                     width={100}
//                                     height={100}
//                                     className="rounded-circle"
//                                 />
//                             </div>
//                             <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice </p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body text-center h-500">
//                             <p className="card-text text-center fw-bold">Mastathon</p>
//                             <div className="d-flex justify-content-center mb-5">
//                                 <Image
//                                     src="/images/01.jpg"
//                                     alt="Startup Image"
//                                     width={100}
//                                     height={100}
//                                     className="rounded-circle"
//                                 />
//                             </div>
//                             <p>A collaborative platform for experienced professionals to build, test, iterate  and get amazing ideas to be market ready in a couple of days (usually not more than a week or 60 hrs).</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ConceptInnovation;


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
                <p className='pb-5'>We have five (5) proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
            </div>
            <div className="row no-gutters">
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body text-center h-500">
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
                            <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body text-center h-500">
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
                            <p>A service-for-shares model for helping early stage startups with product and market validation scale with marketing using a media platform, influencer network or distribution network</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body text-center h-500">
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
                            <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body text-center h-500">
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
                            <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card rounded-0" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body text-center h-500">
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
                            <p>A collaborative platform for experienced professionals to build, test, iterate and get amazing ideas to be market ready in a couple of days (usually not more than a week or 60 hrs).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConceptInnovation;
