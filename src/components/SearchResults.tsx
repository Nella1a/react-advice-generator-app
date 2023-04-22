import React from 'react';
import { SearchResultTypes } from './SearchAdvice';

type Props = {
  result: SearchResultTypes;
};

export default function SearchResults({ result }: Props) {
  console.log(' HEY: ', { result });

  return (
    <article className={'w-full'}>
      {' '}
      {/* <h2 className={'text-center w-full font-semibold text-xl'}>Results</h2> */}
      <div className={'flex flex-col justify-center items-center text-white'}>
        {result &&
          result.slips?.map((advice) => {
            return (
              <div
                key={`${advice.id}`}
                className="flex text-white-500  bg-dark-grayish-blue rounded-xl font-manrope my-5 px-8 pt-4 pb-4  drop-shadow-xl w-[38rem]"
              >
                <span className={'text-neon-green font-bold'}>
                  #{advice.id}
                </span>
                : {advice.advice}
              </div>
            );
          })}
      </div>
    </article>
  );
}
