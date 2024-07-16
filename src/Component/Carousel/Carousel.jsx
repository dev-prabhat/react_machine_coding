import { useEffect, useRef, useState } from "react";
import CarouselItem from "./CarouselItem";
import data from "./data";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const interval = useRef(null);
  const start = () => {
    interval.current = setInterval(() => {
      setActiveIndex((prev) => (prev > data.length - 1 ? 1 : prev + 1));
    }, 3000);
  };
  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  };
  useEffect(() => {
    start();
    return () => stop();
  }, []);

  const next = () => {
    // stop()
    setActiveIndex((prev) => (prev >= data.length ? 1 : prev + 1));
  }

  const prev = () => {
    // stop()
    setActiveIndex((prev) => (prev <= 1 ? data.length : prev - 1));
  }
  return (
    <div>
      <p>Carousel</p>
      <div>
        {data?.map((item) => (
          <CarouselItem
            key={item.id}
            {...item}
            activeIndex={activeIndex}
            start={start}
            stop={stop}
            next={next}
            prev={prev}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
