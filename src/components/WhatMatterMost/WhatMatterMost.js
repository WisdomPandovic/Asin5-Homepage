// import React from 'react';
// import styles from './WhatMatterMost.module.css';
// import Image from 'next/image';

// const WhatMatterMost = () => {
//     return (
//         <div className="container py-4">
//             <div className={styles.focusSection}>
//                 <h2 className="text-center lh-1 fs-4 mb-4 mt-5">
//                     What Matter Most
//                 </h2>
//                 <p className='pb-5'>For every startup in our portfolio and as part of our success strategies, we have key 5 areas of importance in order of preference.
//                 </p>
//             </div>
         
//             <div className="row">
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body">
//                             <p className="card-text" style={{ minHeight: '60px' }}>Timing</p>
//                             <Image
//                                 src="/images/01.jpg"
//                                 alt="/"
//                                 width={400}
//                                 height={100}
//                                 className="card-img-top"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body">
//                             <p className="card-text" style={{ minHeight: '60px' }}>Team Execution</p>
//                             <Image
//                                 src="/images/02.jpg"
//                                 width={400}
//                                 height={100}
//                                 className="card-img-top"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body">
//                             <p className="card-text" style={{ minHeight: '60px' }}>The Idea/Product</p>
//                             <Image
//                                 src="/images/03.jpg"
//                                 alt="Area 3"
//                                 width={400}
//                                 height={100}
//                                 className="card-img-top"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body">
//                             <p className="card-text" style={{ minHeight: '60px' }}>Bussiness Model & Traction</p>
//                             <Image
//                                 src="/images/02.jpg"
//                                 alt="Area 4"
//                                 width={400}
//                                 height={100}
//                                 className="card-img-top"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
//                     <div className="card" style={{ backgroundColor: '#0000000D' }}>
//                         <div className="card-body">
//                             <p className="card-text" style={{ minHeight: '60px' }}>Technology & Funding</p>
//                             <Image
//                                 src="/images/01.jpg"
//                                 alt="Area 5"
//                                 width={400}
//                                 height={100}
//                                 className="card-img-top"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default WhatMatterMost;


import React from 'react';
import styles from './WhatMatterMost.module.css';
import Image from 'next/image';

const WhatMatterMost = () => {
    return (
        <div className="container py-4">
            <div className={styles.focusSection}>
                <h2 className="text-center lh-1 fs-4 mb-4 mt-5">
                    What Matter Most
                </h2>
                <p className='pb-5'>For every startup in our portfolio and as part of our success strategies, we have key 5 areas of importance in order of preference.
                </p>
            </div>
         
            <div className="row">
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text" style={{ minHeight: '60px' }}>Timing</p>
                            <Image
                                src="/images/01.jpg"
                                alt="/"
                                width={400}
                                height={100}
                                className="card-img-top"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text" style={{ minHeight: '60px' }}>Team Execution</p>
                            <Image
                                src="/images/02.jpg"
                                width={400}
                                height={100}
                                className="card-img-top"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text" style={{ minHeight: '60px' }}>The Idea/Product</p>
                            <Image
                                src="/images/03.jpg"
                                alt="Area 3"
                                width={400}
                                height={100}
                                className="card-img-top"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text" style={{ minHeight: '60px' }}>Bussiness Model & Traction</p>
                            <Image
                                src="/images/02.jpg"
                                alt="Area 4"
                                width={400}
                                height={100}
                                className="card-img-top"
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.colLg2Fifth} col-lg-2 col-md-4 col-sm-6 col-12 mb-4`}>
                    <div className="card" style={{ backgroundColor: '#0000000D' }}>
                        <div className="card-body">
                            <p className="card-text" style={{ minHeight: '60px' }}>Technology & Funding</p>
                            <Image
                                src="/images/01.jpg"
                                alt="Area 5"
                                width={400}
                                height={100}
                                className="card-img-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatMatterMost;
