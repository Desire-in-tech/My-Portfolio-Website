import { useState, useEffect, useRef } from 'react';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
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

// Keep the original Cloudinary URL as the src fallback. The browser can select
// a suitably sized, automatically formatted/compressed candidate from srcSet.
const RESPONSIVE_WIDTHS = [320, 480, 640, 768, 960, 1200, 1600];

function buildCloudinarySrcSet(src: string): string | undefined {
  if (!src.startsWith('https://res.cloudinary.com/') || !src.includes('/image/upload/')) {
    return undefined;
  }

  const uploadMarker = '/image/upload/';
  const uploadIndex = src.indexOf(uploadMarker);
  const prefix = src.slice(0, uploadIndex + uploadMarker.length);
  const assetPath = src.slice(uploadIndex + uploadMarker.length);

  return RESPONSIVE_WIDTHS
    .map((width) => `${prefix}f_auto,q_auto,w_${width}/${assetPath} ${width}w`)
    .join(', ');
}

export default function CloudinaryImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority = 'auto',
  sizes,
  aspectClass,
}: CloudinaryImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setLoaded(false);
    setFailed(false);
  }, [src]);

  // Cached images (and images loaded before hydration) may already be complete
  // before React attaches onLoad. Detect that state so they are not left hidden.
  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [currentSrc]);

  const handleError = () => {
    if (!failed) {
      setFailed(true);
      setCurrentSrc(FALLBACK);
    }
  };

  const wrapperClass = aspectClass
    ? `${aspectClass} overflow-hidden bg-secondary-bg relative`
    : '';

  const responsiveSrcSet = failed ? undefined : buildCloudinarySrcSet(src);
  const isPriorityImage = loading === 'eager' && fetchPriority === 'high';

  const img = (
    <img
      ref={imageRef}
      src={currentSrc}
      srcSet={responsiveSrcSet}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      sizes={sizes}
      onError={handleError}
      onLoad={() => setLoaded(true)}
      className={`${className} ${isPriorityImage ? '' : loaded ? 'opacity-100' : 'opacity-0'} ${isPriorityImage ? '' : 'transition-opacity duration-300'}`}
    />
  );

  if (!aspectClass) return img;

  return (
    <div className={wrapperClass}>
      {!loaded && !isPriorityImage && (
        <div className="absolute inset-0 bg-secondary-bg animate-pulse" />
      )}
      {img}
    </div>
  );
}
