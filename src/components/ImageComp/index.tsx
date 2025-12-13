import React from 'react';
import { ImageProps } from '../../types';

const ImageComp = ({ src, description, width, height }: ImageProps) => {
  return <img src={src} alt={description} width={width} height={height} />;
};

export default ImageComp;
