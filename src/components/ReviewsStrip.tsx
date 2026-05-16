"use client";

import { useRef } from "react";

const REVIEWS = [
  { id: 1, src: "/reviews/review-1.jpg" },
  { id: 2, src: "/reviews/review-2.jpg" },
  { id: 3, src: "/reviews/review-3.jpg" },
  { id: 4, src: "/reviews/review-4.jpg" },
  { id: 5, src: "/reviews/review-5.jpg" },
  { id: 6, src: "/reviews/review-6.jpg" },
  { id: 7, src: "/reviews/review-7.jpg" },
  { id: 8, src: "/reviews/review-8.jpg" },
  { id: 9, src: "/reviews/review-9.jpg" },
];

export function ReviewsStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  function onMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }

  function stopDrag() {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }

  return (
    <div className="reviews-strip-wrap">
      <div
        className="reviews-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {REVIEWS.map((r) => (
          <div key={r.id} className="review-card-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.src}
              alt={`Отзыв ${r.id}`}
              draggable={false}
              onError={(e) => {
                // Show placeholder if image not yet uploaded
                (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent && !parent.querySelector(".review-placeholder")) {
                  const ph = document.createElement("div");
                  ph.className = "review-placeholder";
                  ph.innerHTML = `<span>${r.id}</span>`;
                  parent.appendChild(ph);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
