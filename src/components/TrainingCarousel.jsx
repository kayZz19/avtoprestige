import { useState } from "react";

function TrainingCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images?.length) return null;

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="arrow left" onClick={prevSlide} type="button">
          &#10094;
        </button>
      )}

      <div className="carousel-track">
        <img
          src={images[currentIndex]}
          alt={`Слайд ${currentIndex + 1}`}
          className="slide active"
        />
      </div>

      {images.length > 1 && (
        <button className="arrow right" onClick={nextSlide} type="button">
          &#10095;
        </button>
      )}
    </div>
  );
}

export default TrainingCarousel;
