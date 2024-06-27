import React from 'react';
import styles from './AreasOfFocus.module.css';
import Image from 'next/image';

const AreasOfFocusComponent = () => {
  return (
    <div className="container py-4">
      <div className={styles.focusSection}>
        <h2 className="text-center lh-1 fs-4 mb-4 mt-5">
          Our 5 Areas of Focus
        </h2>
        <p className='pb-5'>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
      {/* <div className="row">
        <div className="col mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">01</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Bussiness Support & Incubation</p>
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
        <div className="col mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">02</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>On-Demand & As- A-Service</p>
              <Image
                src="/images/02.jpg"
                width={400}
                height={100}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">03</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>MarketPlace & Crowdsourcing</p>
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
        <div className="col mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">04</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Aggregation & Shared Economy</p>
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
        <div className="col mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">05</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Decentralzed Economy & Digital Asset</p>
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
      </div> */}

      <div className="row">
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">01</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Business Support & Incubation</p>
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
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">02</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>On-Demand & As-A-Service</p>
              <Image
                src="/images/02.jpg"
                width={400}
                height={100}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">03</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>MarketPlace & Crowdsourcing</p>
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
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">04</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Aggregation & Shared Economy</p>
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
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">05</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Decentralized Economy & Digital Asset</p>
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
        <div className="col-lg-2 col-md-4 col-sm-6 col-12 mb-4">
          <div className="card" style={{ backgroundColor: '#0000000D' }}>
            <div className="card-body">
              <h5 className="card-title mt-3">06</h5>
              <p className="card-text" style={{ minHeight: '60px' }}>Decentralized Economy & Digital Asset</p>
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

export default AreasOfFocusComponent;
