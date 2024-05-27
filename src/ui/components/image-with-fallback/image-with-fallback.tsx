"use client";
import { useEffect, useState } from "react";
import Image, { type ImageProps } from "next/image";

export interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
}

export default function ImageWithFallback({ fallbackSrc, src, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return <Image onError={() => setError(true)} src={error ? fallbackSrc : src} alt={alt} {...props} />;
}
