import React from 'react';
import { RandomAdviceTextProps } from '../../types';
import APIErrorMessage from '../APIErrorMessage';
import LoadingMessage from '../LoadingState';

export const RandomAdviceText = ({
  loading,
  error,
  advice,
}: RandomAdviceTextProps) => {
  if (!advice?.id && !loading) {
    return <span>Need advice? Click the button!</span>;
  }
  if (loading) return <LoadingMessage />;
  if (error) return <APIErrorMessage error={error} />;
  return <span>&#8220;{advice?.advice}&#8221;</span>;
};

export default RandomAdviceText;
