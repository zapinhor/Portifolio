"use client";

import { useState } from "react";

export default function GameCarousel({ title, images }: { title: string; images: string[] }) {
  const [current, setCurrent] = useState(0);
  const previous = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="game-carousel" aria-label={`Galeria de ${title}`}>
      <div className="carousel-frame">
        <img key={images[current]} className="carousel-image" src={images[current]} alt={`Captura ${current + 1} de ${title}`} />
        <span className="carousel-count">{String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="carousel-controls">
        <button type="button" onClick={previous} aria-label={`Imagem anterior de ${title}`}>←</button>
        <div className="carousel-dots" aria-hidden="true">{images.map((_, index) => <span className={index === current ? "active" : ""} key={index} />)}</div>
        <button type="button" onClick={next} aria-label={`Próxima imagem de ${title}`}>→</button>
      </div>
    </div>
  );
}
