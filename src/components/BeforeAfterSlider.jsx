import { useState, useRef, useEffect, useCallback } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  clientName
}) {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const calculatePosition = useCallback((clientX) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    calculatePosition(e.clientX);
  }, [isDragging, calculatePosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = (e) => {
    setIsDragging(true);
  };

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    calculatePosition(e.touches[0].clientX);
  }, [isDragging, calculatePosition]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleContainerClick = (e) => {
    if (!isDragging) {
      calculatePosition(e.clientX);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div className="bas-wrapper">
      <div
        className={`bas-container ${isDragging ? 'bas-dragging' : ''}`}
        ref={containerRef}
        onClick={handleContainerClick}
        style={{ cursor: isDragging ? 'grabbing' : 'col-resize' }}
      >
        {/* Before image — base layer */}
        <img
          className="bas-image bas-before"
          src={beforeSrc}
          alt={clientName ? `${clientName} studio` : 'Podcast studio installation'}
          onLoad={() => setImagesLoaded(true)}
          draggable={false}
        />

        {/* After image — revealed layer using clip-path */}
        <div
          className="bas-after-wrapper"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            className="bas-image bas-after"
            src={afterSrc}
            alt={clientName ? `${clientName} studio` : 'Podcast studio installation'}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="bas-divider"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical line */}
          <div className="bas-line" />

          {/* Handle knob — styled after Elfsight example 4 */}
          <div
            className="bas-handle"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L2 10L7 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 4L18 10L13 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="bas-label bas-label-before">{beforeLabel}</span>
        <span className="bas-label bas-label-after">{afterLabel}</span>
      </div>

      {clientName && (
        <p className="bas-client-name">{clientName}</p>
      )}
    </div>
  );
}
