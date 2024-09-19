import React, { useEffect, useState } from 'react';

const Page = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return <div>No images to display</div>; // Handle empty or undefined images
  }

  const sliderContainerStyles = {
    position: 'relative',
    width: '100vw',
    height: '600px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const sliderInnerStyles = {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    width: `${images.length * 100}%`,
    transform: `translateX(-${(currentIndex / images.length) * 100}%)`,
  };

  const imageStyles = {
    width: '100vw',
    height: '100%',
    objectFit: 'cover',
    flexShrink: 0,
  };

  const buttonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 100,
    fontSize: '24px',
  };

  const prevButtonStyles = {
    ...buttonStyles,
    left: '10px',
  };

  const nextButtonStyles = {
    ...buttonStyles,
    right: '10px',
  };

  return (
    <div style={sliderContainerStyles}>
      <button style={prevButtonStyles} onClick={handlePrevious}>
        &#10094;
      </button>
      <div style={{ position: 'relative', height: '100%' }}>
        <div style={sliderInnerStyles}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`slide-${index}`} style={imageStyles} />
          ))}
        </div>
      </div>
      <button style={nextButtonStyles} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Page;
