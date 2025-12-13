import React from 'react';

interface ImageProps {
  src: string;
  description: string;
  width: string;
  height: string;
};

const ImageComp = ({ src, description, width, height }: ImageProps) => {
  return <img src={src} alt={description} width={width} height={height} />;
};

export default ImageComp;
