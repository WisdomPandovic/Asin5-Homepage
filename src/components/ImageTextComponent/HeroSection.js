// src/components/ImageTextComponent.js
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const ImageTextComponent = ({ text, imageUrl }) => {
    return (
        <div className='container-fluid'>
            <Row className="my-4">
                <Col lg={6} md={12} sm={12} className='d-flex justify-content-center align-items-center p-5'>
                    <div >
                        <h2 className='lh-base custom-h2 fw-bold'>Building the future together,<br></br> democratizing <br></br>success.</h2>
                        <div className='custom-button'><button className="btn btn-dark">Apply to SIP 1.0</button></div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="text-center">
                    <Image src="/images/hero.jpg" width={100}
                        height={100}
                        layout="responsive" />
                </Col>
            </Row>
        </div>
    );
};

export default ImageTextComponent;
