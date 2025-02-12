'use client'
import { useEffect, useRef, useState } from "react";

const Carousel = ({  interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  let startX = 0;
  let isDragging = false;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleDragStart = (e) => {
    isDragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
    isDragging = false;
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden h-64 my-8">
        <div className="flex justify-center items-center my-8"> 
            <h1 className="text-3xl font-bold text-blue-500">
                Success Stories
            </h1>
        </div>
      <div
        className="flex transition-transform ease-in-out duration-300 my-8  w-full  "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={containerRef}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full flex-shrink-0 p-4 text-center flex-wrap gap-4">
            <p className="font-light text-base text-wrap">{item.text}</p>
            <p className="text-xl font-bold text-zinc-900 mt-4">- {item.author}</p>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Carousel;


export const items = [
    {
        text: "Want to try out MongoDB on your laptop? Execute a single command and you have a lightweight, self-contained sandbox; another command removes all traces when you’re done.",
        author: "Global Sign"
    },
    {
        text: "Want to try out MongoDB on your laptop? Execute a single command and you have a lightweight, self-contained sandbox; another command removes all traces when you’re done.",
        author: "Global Sign"
    },
    {
        text: "Want to try out MongoDB on your laptop? Execute a single command and you have a lightweight, self-contained sandbox; another command removes all traces when you’re done.",
        author: "Global Sign"
    } 
]