import React, { useState } from 'react';
import '../pages/ImageCarousel.css';

const images = [
  'https://img.freepik.com/free-psd/3d-illustration-person-working-marketing_23-2150417376.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=ais',
  'https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417382.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=ais',
  'https://img.freepik.com/premium-vector/realistic-concept-digital-marketing-scene-without-people-3d-cartoon-style_198565-2662.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=ais',
  // Add more image URLs as needed
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <img key={index} className="carousel-slide" src={imageUrl} alt={`slide-${index}`} />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        &#9665;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#9655;
      </button>
    </div>
  );
};

export default ImageCarousel;

