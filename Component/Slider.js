"use client"


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../Component/Slider.css'; // Make sure the path is correct

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, src: "/Img/slide-1.png", alt: "Slider Image 1", link: "/Contact" },
    { id: 2, src: "/Img/slide-2.png", alt: "Slider Image 2", link: "/Contact" },
    { id: 3, src: "/Img/slide-3.png", alt: "Slider Image 3", link: "/Contact" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          <Link href={slide.link} passHref>
            <img 
              src={slide.src}
              alt={slide.alt}
              className="slide-image"
            />
          </Link>
        </div>
      ))}

      <button className="slider-btn prev-btn" onClick={prevSlide}>&#10094;</button>
      <button className="slider-btn next-btn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Slider;