import React from 'react';
import Button from '../Button';

type Props = {
  searchTerm: string;
  onClickHandlerSearch: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchTerm = (props: Props) => {
  return (
    <>
      <div className={'text-center w-full text-quote-size'}>
        {' '}
        <label htmlFor="searchAdvice ">
          <h1 className="text-headingOne font-extrabold font-manrope mb-6 mt-10 md:mt-0">
            Search Advice
          </h1>
        </label>
      </div>
      <div className={'flex justify-center items-center w-full gap-1'}>
        {' '}
        <input
          id="searchAdvice"
          type="search"
          value={props.searchTerm}
          onChange={props.onChangeHandler}
          className={'w-[30rem] h-12 rounded-lg pl-5 text-black'}
        />{' '}
        <Button text={'Search'} onClickHandler={props.onClickHandlerSearch} />
      </div>
    </>
  );
};

export default SearchTerm;
