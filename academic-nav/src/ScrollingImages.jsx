import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const images = [
  "https://vignandegreecollege.ac.in/admin/uploads/slides/2721poster%20release6_4.jpg",
  "https://images.shiksha.com/mediadata/images/articles/1733733659phplcAqBl.jpeg",
  "https://vignandegreecollege.ac.in/admin/uploads/slides/6210kabadddi.jpg",
  "http://vignandegreecollege.ac.in/admin/uploads/photos/733ncc%2022%202.jpeg"
];

const ScrollingImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrolling-container">
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
    </div>
  );
};

export default ScrollingImages;
