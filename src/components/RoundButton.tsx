import React from 'react';
import ImageComp from './ImageComp';

type Props = {
  onClickHandler: () => void;
};

function RoundButton({ onClickHandler }: Props) {
  return (
    <button
      className="absolute z-10 -bottom-10 left-50% bg-neon-green
    hover:shadow-3xl hover:bg-neon-green
    rounded-full w-20 h-20 margin-auto flex justify-center items-center sm:w-16 sm:h-16 sm:-bottom-7"
      onClick={onClickHandler}
    >
      {' '}
      <ImageComp
        src={'/images/icon-dice.svg'}
        description={'icon dice'}
        width={'24'}
        height={'24'}
      />
    </button>
  );
}

export default RoundButton;
