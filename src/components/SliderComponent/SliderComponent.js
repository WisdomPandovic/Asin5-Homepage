import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderComponent.module.css';

const SliderComponent = () => {
    const slides = [
        {
            image: '/images/01.jpg',
            title: 'SINC Partners invests  over 200 million naira in 5 startups',
            text: ' SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in...',
            subtitle: 'Subtitle 1',
        },
        {
            image: '/images/02.jpg',
            title: 'SINC Partners invests  over 200 million naira in 5 startups',
            text: 'Slide 1 Text',
            subtitle: 'Subtitle 1',
        },
        {
            image: '/images/03.jpg',
            title: 'SINC Partners invests  over 200 million naira in 5 startups',
            text: 'Slide 1 Text',
            subtitle: 'Subtitle 1',
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className='bg-gray'>
            <div className="container py-4">
                <p className='text-center bold mb-3'>As Featured In</p>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="d-flex ">
                            <img src={slide.image} alt={`Slide ${index + 1}`} className="img-fluid" style={{ maxWidth: '50%' }} />
                            <div className={` px-4 ms-4 ${styles.textContainer}`} style={{ flex: 1 }}>
                                <p>{slide.title}</p>
                                <p className='mb-4'>{slide.text}</p>
                                <h3>{slide.subtitle}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
