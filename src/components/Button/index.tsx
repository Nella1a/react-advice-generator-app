import React from 'react';
import { ButtonProps } from '../../types';

const Button = ({ text, onClickHandler }: ButtonProps) => {
  return (
    <>
      <button
        className={
          'w-32 h-12  text-center text-dark-blue font-manrope bg-neon-green font-bold hover:bg-green-100 rounded-lg'
        }
        onClick={onClickHandler}
      >
        {text}
      </button>
    </>
  );
};
export default Button;
