import React, { Component } from 'react';
import { Advice, Error, RandomAdviceApiResponse } from '../../types/types';
import ImageComp from '../ImageComp';
import Layout from '../Layout';
import RoundButton from '../RoundButton';

type InitialState = {
  loading: boolean;
  randomAdvice: Advice;
  error: Error | undefined;
};

class RandomAdvice extends Component<{}, InitialState> {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      loading: false,
      randomAdvice: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    this.fetchRandomAdvise();
  }

  fetchRandomAdvise = async () => {
    console.log('fetc');
    try {
      const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
      });
      const apiResponse: RandomAdviceApiResponse = await response.json();
      console.log('api: ', apiResponse);
      if ('message' in apiResponse) {
        this.setState({ error: apiResponse.message });
      } else {
        this.setState({
          randomAdvice: {
            id: apiResponse.slip.id,
            advice: apiResponse.slip.advice,
          },
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  onClickHandler = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
      this.fetchRandomAdvise();
    }, 1000);
  };

  render() {
    console.log('render');
    const { randomAdvice, error, loading } = this.state;
    const { onClickHandler } = this;
    return (
      <Layout>
        <div className="flex flex-col h-[27rem] w-11/12  text-amber-500  bg-dark-grayish-blue rounded-3xl gap-6 relative font-manrope px-8 pt-8 pb-4  text-center drop-shadow-xl sm:h-[21rem] sm:w-[35rem] ">
          <h1 className="text-neon-green  tracking-[0.2rem] text-center font-semibold">
            ADVICE #{randomAdvice?.id}
          </h1>
          <p className="h-[12rem] flex justify-center items-center  text-quote-size text-light-cyan m-auto font-extrabold my-6 sm:h-[5rem] sm:min-h-0 ">
            {loading ? (
              <span>is loading...</span>
            ) : !error ? (
              <span> &#8220;{randomAdvice?.advice}&#8221;</span>
            ) : (
              <span className={'text-red-600'}>
                Oops, something went wrong. Please try again!
                {error?.text}
              </span>
            )}
          </p>
          <div className="flex justify-center">
            <ImageComp
              src={'/images/pattern-divider-desktop.svg'}
              description={'pattern divider'}
              width={'444'}
              height={'16'}
            />
            <RoundButton onClickHandler={onClickHandler} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default RandomAdvice;
