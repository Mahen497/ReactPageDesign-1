import { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.disconnect(); // stop observing once loaded
          }
        });
      },
      { threshold: 0.1 } // image loads when 10% is visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : "/placeholder.jpg"}
      alt={alt}
      className={`${className} ${!isVisible ? "loading" : ""}`}
    />
  );
}

export default LazyImage;
