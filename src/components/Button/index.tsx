import React from 'react';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <>
      <button
        className={
          'w-32 h-12  text-center text-dark-blue font-manrope bg-neon-green font-bold hover:text-pink-600 rounded-lg'
        }
      >
        {text}
      </button>
    </>
  );
};
export default Button;
