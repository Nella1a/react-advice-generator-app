import React, { useEffect, useState } from 'react';
import { ApiError, RandomAdvice } from '../../types';
import ImageComp from '../ImageComp';
import Layout from '../layout';
import { RandomAdviceText } from '../RandomAdviceText';
import RoundButton from '../RoundButton';
import { setErrorMessage } from '../SearchAdvice';

export type APIRandomAdvice = {
  slip: { id: number; advice: string };
};

const GetRandomAdvice = () => {
  const [loading, setLoading] = useState(false);
  const [randomAdvice, setRandomAdvice] = useState<RandomAdvice>();
  const [error, setError] = useState<ApiError>(undefined);

  useEffect(() => {
    if (!loading) return;

    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        if ('slip' in result) {
          setRandomAdvice({
            id: result.slip.id,
            advice: result.slip.advice,
          });
        } else {
          setErrorMessage(result.message, setError);
        }
      })
      .catch((error) => setErrorMessage(error.message, setError));
  }, [loading]);

  const HandleOnClick = () => {
    setLoading(true);
    setError(undefined);
  };
  return (
    <Layout>
      <div className="w-full  flex flex-col items-center md:w-11/12">
        <h1 className="text-headingOne font-extrabold font-manrope mt-10 mb-6  md:mt-0 w-full text-center">
          Get Random Advice
        </h1>
        <div className="flex flex-col h-[27rem] w-11/12 bg-dark-grayish-blue rounded-3xl gap-6 relative font-manrope px-8 pt-8 pb-4  text-center drop-shadow-xl sm:h-[21rem] sm:w-[35rem] mt-1 m-auto">
          <h2 className="text-neon-green  tracking-[0.2rem] text-center font-semibold">
            {!loading && randomAdvice?.advice && `ADVICE #${randomAdvice?.id}`}
          </h2>
          <p className="h-[12rem] flex justify-center items-center text-quote-size text-light-cyan m-auto font-extrabold my-6 sm:h-[5rem] sm:min-h-0">
            <RandomAdviceText
              loading={loading}
              error={error}
              advice={randomAdvice}
            />
          </p>
          <div className="flex justify-center">
            <ImageComp
              src={'/images/pattern-divider-desktop.svg'}
              description={'pattern divider'}
              width={'444'}
              height={'16'}
            />
            <RoundButton onClickHandler={HandleOnClick} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetRandomAdvice;
