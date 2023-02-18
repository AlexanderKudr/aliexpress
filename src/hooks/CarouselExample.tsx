import { useState, useEffect } from "react";

const items = [
  { id: 1, title: "Slide 1", content: "This is slide 1" },
  { id: 2, title: "Slide 2", content: "This is slide 2" },
  { id: 3, title: "Slide 3", content: "This is slide 3" },
];

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const { id, title, content } = items[currentSlide];
  const buttonStyle = {
    //if you need these styles, move them into sass file
    backgroundColor: "white",
    border: "none",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
  };
  const containerStyle = {
    //if you need these styles, move them into sass file
    backgroundColor: "white",
    border: "none",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
  };
  return (
    <div style={containerStyle}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button style={buttonStyle} onClick={previousSlide}>
        Previous
      </button>
      <button style={buttonStyle} onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};
