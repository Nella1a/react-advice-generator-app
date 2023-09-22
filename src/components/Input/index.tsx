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
    <article
      className={'flex flex-col justify-center items-center gap-8 h-2/6 w-full'}
    >
      <div className={'text-center  h-1/6 w-full text-quote-size'}>
        {' '}
        <label htmlFor="searchAdvice">
          <h1>Search Advice</h1>
        </label>
      </div>
      <div className={'flex justify-center items-center h-2/6 w-full gap-1'}>
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
    </article>
  );
};

export default SearchTerm;
