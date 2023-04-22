import React from 'react';

type Props = {
  text: string;
  onClickHandlerSearch: () => void;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchTerm({
  text,
  onClickHandlerSearch,
  setText,
}: Props) {
  return (
    <article
      className={
        'flex flex-col justify-center items-center border-8 border-yellow gap-8 h-2/6 w-full'
      }
    >
      <div
        className={
          'text-center border-4 border-red h-1/6 w-full text-quote-size'
        }
      >
        {' '}
        <label htmlFor="searchAdvice">
          <h1>Search Advice</h1>
        </label>
      </div>
      <div
        className={
          'flex justify-center items-center h-2/6 border-4 border-red w-full gap-1'
        }
      >
        {' '}
        <input
          id="searchAdvice"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className={'w-[30rem] h-12 rounded-lg'}
        />{' '}
        <button
          className={
            'w-32 h-12  text-center text-dark-blue font-manrope bg-neon-green hover:shadow-3xl hover:bg-neon-green font-bold rounded-lg'
          }
          onClick={onClickHandlerSearch}
        >
          Search
        </button>
      </div>
    </article>
  );
}
