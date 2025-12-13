import React from 'react';
import { SearchResultsProps } from '../../types';

const SearchResults = ({ result }: SearchResultsProps) => {
  return (
    <>
      <article className="flex flex-col justify-center items-center text-white mt-8">
        {result.slips.map((advice) => {
          return (
            <div
              key={`${advice.id}`}
              className="flex min-h-24 text-white-500  bg-dark-grayish-blue rounded-xl font-manrope my-2 px-8 pt-4 pb-4 drop-shadow-xl md:w-[38rem] w-full"
            >
              <span className={'text-neon-green font-bold'}>#{advice.id}</span>:{' '}
              {advice.advice}
            </div>
          );
        })}
      </article>
    </>
  );
};

export default SearchResults;
