import React, { Component } from 'react';

type Advice = {
  id: number;
  advice: string;
  date?: number;
};

type Props = {
  text: string;
  onClickHandlerSearch: () => void;
  setText: (event: string) => void;
  setAdvice: () => void;
};

class SearchTerm extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchString = event.target.value;
    this.props.setText(event.target.value);
    console.log('text###: ', this.props.text);
    if (!event.target.value) {
      console.log('YES');
      this.props.setAdvice();
    }
  }

  render() {
    const { text, onClickHandlerSearch, setText } = this.props;
    // console.log('text: ', text);
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
            type="search"
            value={text}
            onChange={this.handleOnChange}
            className={'w-[30rem] h-12 rounded-lg pl-5 text-black'}
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
}

export default SearchTerm;
