import React from 'react';
import { ApiError, RandomAdvice } from '../../types';
import APIErrorMessage from '../APIErrorMessage';
import LoadingMessage from '../LoadingState';

export const RandomAdviceText = ({
  loading,
  error,
  advice,
}: {
  loading: boolean;
  error: ApiError;
  advice?: RandomAdvice;
}) => {
  if (!advice?.id && !loading) {
    return <span>Need advice? Click the button!</span>;
  }
  if (loading) return <LoadingMessage />;
  if (error) return <APIErrorMessage error={error} />;
  return <span>&#8220;{advice?.advice}&#8221;</span>;
};

export default RandomAdviceText;
