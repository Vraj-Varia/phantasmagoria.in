import React, { useEffect, useState, useRef } from 'react';

import ImageSlider from "./ImageSlider";
import image1 from '../assets/1_slider.jpg';
import image2 from '../assets/2_slider.jpg';
import image3 from '../assets/3_slider.jpg';
import image4 from '../assets/4_slider.jpg';
import image5 from '../assets/5_slider.jpg';


// Portfolio Section with Parallax Grid
function Portfolio({ scrollY }) {

const projectImages = [
    image1,
    image2,
    image3,
    image4,
    image5
  ];


  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const portfolioItems = [
    { id: 1, category: 'Weddings', title: 'Eternal Love', size: 'large' },
    { id: 2, category: 'Portrait', title: 'Soul Stories', size: 'small' },
    { id: 3, category: 'Events', title: 'Celebrations', size: 'small' },
    { id: 4, category: 'Weddings', title: 'Sacred Bonds', size: 'medium' },
    { id: 5, category: 'Fashion', title: 'Editorial', size: 'small' },
    { id: 6, category: 'Weddings', title: 'Royal Affairs', size: 'medium' },
  ];

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>

      {/* <div className="section-header">
        <br />
        <h2 className="section-title">Selected Works</h2>
        <div className="section-divider"></div>
      </div> */}

      <ImageSlider images={projectImages} />
{/* 
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={item.id}
            item={item}
            index={index}
            scrollY={scrollY}
            isVisible={isVisible}
          />
        ))}
      </div> */}
    </section>
  );
}

function PortfolioItem({ item, index, scrollY, isVisible }) {
  const itemRef = useRef(null);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      setItemOffset(rect.top + window.scrollY);
    }
  }, []);

  const parallaxSpeed = 0.05 + (index % 3) * 0.02;
  const parallaxY = (scrollY - itemOffset) * parallaxSpeed;

  return (
    <div
      ref={itemRef}
      className={`portfolio-item ${item.size} ${isVisible ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="portfolio-image-wrapper">
        <div
          className="portfolio-image"
          style={{ transform: `translateY(${parallaxY}px) scale(1.1)` }}
        >
          <div className="portfolio-placeholder">
            <span>{item.title}</span>
          </div>
        </div>
        <div className="portfolio-overlay">
          <span className="portfolio-category">{item.category}</span>
          <h3 className="portfolio-item-title">{item.title}</h3>
          <button className="portfolio-view">View Gallery</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
