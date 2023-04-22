import React from 'react';
import { SearchResultTypes } from './SearchAdvice';

type Props = {
  result: SearchResultTypes;
};

export default function SearchResults({ result }: Props) {
  console.log(' HEY: ', { result });

  return (
    <>
      {' '}
      <h2>Results</h2>
      <div className={'text-white'}>
        {result &&
          result.slips?.map((advice) => {
            return (
              <div
                key={`${advice.id}`}
                className="flex  h-[6rem] w-11/12 text-amber-500  bg-dark-grayish-blue rounded-3xl gap-6 font-manrope my-5 px-8 pt-8 pb-4  text-center drop-shadow-xl"
              >
                {advice.advice}
              </div>
            );
          })}
      </div>
    </>
  );
}
