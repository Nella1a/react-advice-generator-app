import React from 'react';

type Props = {
  text: string;
};

const ButtonLarge = ({ text }: Props) => {
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
