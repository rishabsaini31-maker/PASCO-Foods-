import { useId, useRef, useEffect } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  alt: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  playsInline?: boolean;
  className?: string;
  preload?: 'auto' | 'metadata' | 'none';
  width?: number;
  height?: number;
  prioritized?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  alt,
  autoPlay = true,
  muted = true,
  loop = true,
  controls = false,
  playsInline = true,
  className = '',
  preload = 'metadata',
  width,
  height,
  prioritized = false,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const id = useId();
  const sourceId = `video-source-${id.replace(/:/g, '')}`;

  useEffect(() => {
    if (videoRef.current && prioritized) {
      void videoRef.current.load();
    }
  }, [prioritized]);

  return (
    <video
      ref={videoRef}
      src={src}
      data-src={src}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline={playsInline}
      preload={preload}
      width={width}
      height={height}
      className={className}
      aria-label={alt}
      disablePictureInPicture
    />
  );
}

export interface VideoWithPosterProps extends VideoPlayerProps {
  posterSrc: string;
  posterWidth?: number;
  posterHeight?: number;
}

export function VideoWithPoster({
  posterSrc,
  posterWidth = 1920,
  posterHeight = 1080,
  ...props
}: VideoWithPosterProps) {
  return (
    <>
      <Image
        src={posterSrc}
        alt={props.alt}
        width={posterWidth}
        height={posterHeight}
        className="absolute inset-0 w-full h-full object-cover"
        priority={props.prioritized}
      />
      <VideoPlayer {...props} />
    </>
  );
}
