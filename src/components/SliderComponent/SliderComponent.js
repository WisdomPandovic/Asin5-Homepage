import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SliderComponent.module.css';

const SliderComponent = () => {
    const slides = [
        {
            image: '/images/01.jpg',
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            text: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in...',
            subtext: 'REPORTED BY',
            author: 'Rema Viel',
        },
        {
            image: '/images/02.jpg',
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            text: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in...',
            subtext: 'REPORTED BY',
            author: 'Rema Viel',
        },
        {
            image: '/images/03.jpg',
            title: 'SINC Partners invests over 200 million naira in 5 startups',
            text: 'SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in 5 startups. SINC Partners invests over 200 million naira in...',
            subtext: 'REPORTED BY',
            author: 'Rema Viel',
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className='bg-gray'>
            <div className="container py-4">
                <p className='text-center fw-bold mb-3'>As Featured In</p>
                <div className={`d-flex justify-content-center ${styles.slider}`}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`d-flex ${styles.slideContainer} ${index === activeIndex ? styles.active : ''}`}
                        >
                            <div className={`col-lg-7 p-0 ${styles.imageContainer}`}>
                                <Image src={slide.image} alt={`Slide ${index + 1}`} className={`${styles.img}`} width={700} height={400} />
                            </div>
                            <div className={`col-lg-3 bg-white p-4 ${styles.textContainer}`}>
                                <h4>{slide.title}</h4>
                                <p className='mb-4'>{slide.text}</p>
                                <p className='mt-5'>{slide.subtext}</p>
                                <p>{slide.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderComponent;
