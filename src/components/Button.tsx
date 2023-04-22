import React from 'react';

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <>
      <button
        className={
          'w-32 h-12  text-center text-dark-blue font-manrope bg-neon-green hover:shadow-3xl hover:bg-neon-green font-bold rounded-lg'
        }
      >
        {text}
      </button>
    </>
  );
}
