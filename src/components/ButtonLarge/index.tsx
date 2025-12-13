import React from 'react';
import { ButtonProps } from '../../types';

const ButtonLarge = ({ text }: Pick<ButtonProps, 'text'>) => {
  return (
    <>
      <button
        className={
          'w-44 h-12  text-center text-dark-blue font-manrope bg-neon-green font-bold hover:bg-green-100 rounded-lg'
        }
      >
        {text}
      </button>
    </>
  );
};

export default ButtonLarge;
