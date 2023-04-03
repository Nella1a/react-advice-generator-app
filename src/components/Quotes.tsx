import React, { useEffect, useState } from 'react';

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
    <div className="h-[30rem] w-11/12  text-amber-500  bg-dark-grayish-blue rounded-3xl gap-6 relative font-manrope px-8 pt-8 pb-4  text-center sm:h-80 sm:w-[35rem] ">
      <p className="text-neon-green  tracking-widest text-center font-bold">
        ADVICE #{advice?.id}
      </p>
      <p className="h-64 flex justify-center items-center  text-quote-size text-light-cyan m-auto font-extrabold my-6 sm:h-32 sm:min-h-0 ">
        {!errors ? (
          <span> &#8220;{advice?.advice}&#8221;</span>
        ) : (
          <span className={'text-red-600'}>
            Oops, something went wrong. Please try again!
          </span>
        )}
      </p>
      <div className="flex justify-center">
        <img
          src={'/images/pattern-divider-desktop.svg'}
          alt={'pattern divider'}
          width={'444'}
          height={'16'}
        />

        <button
          className="absolute z-10 -bottom-10 left-50% bg-neon-green
          hover:shadow-3xl hover:bg-neon-green
          rounded-full w-20 h-20 margin-auto flex justify-center items-center sm:w-14 sm:h-14 sm:-bottom-7"
          onClick={onClickHandler}
        >
          {' '}
          <img
            src={'/images/icon-dice.svg'}
            alt={'icon dice'}
            width={'24'}
            height={'24'}
          />
        </button>
      </div>
    </div>
  );
}
