import React, { Component } from 'react';

type ImageProps = {
  src: string;
  description: string;
  width: string;
  height: string;
};

class ImageComp extends Component<ImageProps> {
  render() {
    const { src, description, width, height } = this.props;
    return <img src={src} alt={description} width={width} height={height} />;
  }
}

export default ImageComp;
