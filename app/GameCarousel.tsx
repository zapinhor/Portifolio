"use client";

import { useState, type TouchEvent } from "react";

export default function GameCarousel({ title, images }: { title: string; images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const previous = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);
  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) distance > 0 ? previous() : next();
    setTouchStart(null);
  };

  return (
    <div className="game-carousel" aria-label={`Galeria de ${title}`}>
      <div className="carousel-frame" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={handleTouchEnd}>
        <img key={images[current]} className="carousel-image" src={images[current]} alt={`Captura ${current + 1} de ${title}`} loading="lazy" decoding="async" />
        <span className="carousel-count">{String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={previous} aria-label={`Imagem anterior de ${title}`}>←</button>
        <div className="carousel-dots" aria-label={`Selecionar imagem de ${title}`}>{images.map((_, index) => <button type="button" className={index === current ? "active" : ""} aria-label={`Ver imagem ${index + 1} de ${title}`} aria-current={index === current ? "true" : undefined} onClick={() => setCurrent(index)} key={index}><span /></button>)}</div>
        <button type="button" onClick={next} aria-label={`Próxima imagem de ${title}`}>→</button>
      </div>
    </div>
  );
}
