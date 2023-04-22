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
    <section className={'flex flex-col'}>
      <div>
        {' '}
        <label htmlFor="searchAdvice">
          <h1>Search Advice</h1>
        </label>
      </div>
      <div>
        {' '}
        <input
          id="searchAdvice"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className={'w-96 h-12 rounded-lg'}
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
    </section>
  );
}
