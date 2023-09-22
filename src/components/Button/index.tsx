import React from 'react';

type Props = {
  text: string;
  onClickHandler?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
};

const Button = ({ text, onClickHandler }: Props) => {
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
