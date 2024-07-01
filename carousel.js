// src/Carousel.js
import React, { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const PrevButton = styled(CarouselButton)`
  left: 10px;
`;

const NextButton = styled(CarouselButton)`
  right: 10px;
`;

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <CarouselContainer>
      <CarouselInner currentIndex={currentIndex}>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </CarouselItem>
        ))}
      </CarouselInner>
      <PrevButton onClick={handlePrevClick}>&#10094;</PrevButton>
      <NextButton onClick={handleNextClick}>&#10095;</NextButton>
    </CarouselContainer>
  );
};

export default Carousel;
