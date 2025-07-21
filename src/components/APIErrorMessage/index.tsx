import React from 'react';
import { ApiError } from '../../types';

export const APIErrorMessage = ({ error }: { error: ApiError }) => (
  <span className="text-red-600">
    Oops, something went wrong. Please try again!
    <br />
    {error?.text}
  </span>
);
