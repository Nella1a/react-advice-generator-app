import React from 'react';
import { SearchAdviceType } from '../../types/types';

type Props = {
  result: SearchAdviceType;
};

const SearchResults = ({ result }: Props) => {
  return (
    <>
      <article className={'w-full'}>
        <div className={'flex flex-col justify-center items-center text-white'}>
          {result.slips.map((advice) => {
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
    </>
  );
};

export default SearchResults;
