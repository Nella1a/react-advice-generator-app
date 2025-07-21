import React from 'react';

const LoadingMessage = ({ cssClass }: { cssClass?: string }) => (
  <span className={cssClass}>Loading...</span>
);
export default LoadingMessage;
