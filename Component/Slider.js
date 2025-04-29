"use client";
import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "./Img/slide-1.png",
      link: "/Navbar",
      alt: "Image 1",
    },
    {
      url: "./slide-2.png",
      link: "#",
      alt: "Image 2",
    },
    {
      url: "./slide-3.png",
      link: "https://example.com/3",
      alt: "Image 3",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <a
          key={index}
          href={img.link}
          target="_blank"
          rel="noopener noreferrer"
          className={index === currentIndex ? "active" : "hidden"}
        >
          <img src={img.url} alt={img.alt} />
        </a>
      ))}
    </div>
  );
};

export default Slider;
