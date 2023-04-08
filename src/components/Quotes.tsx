import React, { useEffect, useState } from 'react';
import ImageComp from './ImageComp';
import RoundButton from './RoundButton';

type APIRESPONSE = {
  id: number;
  advice: string;
};

export default function Quotes() {
  const [advice, setAdvice] = useState<APIRESPONSE>();
  const [getNewAdvice, setGetNewAdive] = useState(true);
  const [errors, setErrors] = useState<string | undefined>();
  useEffect(() => {
    async function getAdvise() {
      const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
      });
      const apiResponse = await response.json();
      if (apiResponse.message?.type === 'error') {
        setErrors(apiResponse.message.text);
      } else {
        setAdvice(apiResponse.slip);
      }
    }

    if (getNewAdvice) {
      getAdvise();
      setGetNewAdive(false);
    }
  }, [getNewAdvice]);

  const onClickHandler = () => {
    setGetNewAdive(true);
  };

  return (
    <div className="flex flex-col h-[28rem] w-11/12  text-amber-500  bg-dark-grayish-blue rounded-3xl gap-6 relative font-manrope px-8 pt-8 pb-4  text-center drop-shadow-2xl sm:h-[21rem] sm:w-[35rem] ">
      <h1 className="text-neon-green  tracking-[0.2rem] text-center font-semibold">
        ADVICE #{advice?.id}
      </h1>
      <p className="h-[12rem] flex justify-center items-center  text-quote-size text-light-cyan m-auto font-extrabold my-6 sm:h-[5rem] sm:min-h-0 ">
        {!errors ? (
          <span> &#8220;{advice?.advice}&#8221;</span>
        ) : (
          <span className={'text-red-600'}>
            Oops, something went wrong. Please try again!
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
  );
}
