import { useState, useEffect } from 'react';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  /** Aspect ratio class, e.g. 'aspect-video'. When set, a placeholder skeleton shows until loaded. */
  aspectClass?: string;
}

const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225">
      <rect width="400" height="225" fill="#111827"/>
      <rect x="150" y="80" width="100" height="60" rx="6" fill="#374151"/>
      <circle cx="200" cy="95" r="12" fill="#4B5563"/>
      <polygon points="175,130 200,110 225,130" fill="#4B5563"/>
    </svg>`
  );

export default function CloudinaryImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  aspectClass,
}: CloudinaryImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (!failed) {
      setFailed(true);
      setCurrentSrc(FALLBACK);
    }
  };

  const wrapperClass = aspectClass
    ? `${aspectClass} overflow-hidden bg-secondary-bg relative`
    : '';

  const img = (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      onError={handleError}
      onLoad={() => setLoaded(true)}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
    />
  );

  if (!aspectClass) return img;

  return (
    <div className={wrapperClass}>
      {!loaded && (
        <div className="absolute inset-0 bg-secondary-bg animate-pulse" />
      )}
      {img}
    </div>
  );
}
