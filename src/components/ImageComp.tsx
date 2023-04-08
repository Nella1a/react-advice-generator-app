import React from 'react';

type ImageProps = {
  src: string;
  description: string;
  width: string;
  height: string;
};

export default function ImageComp({
  src,
  description,
  width,
  height,
}: ImageProps) {
  return <img src={src} alt={description} width={width} height={height} />;
}
