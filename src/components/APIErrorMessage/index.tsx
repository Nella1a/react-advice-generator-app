import React from 'react';
import { ApiError } from '../../types';

const APIErrorMessage = ({ error }: { error: ApiError }) => (
  <span className="text-red-600">
    Oops, something went wrong. Please try again!
    <br />
    {error?.text}
  </span>
);

export default APIErrorMessage;
