import React, { useEffect, useState } from 'react';

type APIRESPONSE = {
  id: number;
  advice: string;
};

export default function Quotes() {
  const [advice, setAdvice] = useState<APIRESPONSE>();
  useEffect(() => {
    async function getAdvise() {
      const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
      });
      const apiResponse = await response.json();
      if (apiResponse.status > 200) {
        console.log('ERRORS');
      } else {
        console.log('Response: ', apiResponse);
        setAdvice(apiResponse.slip);
      }
    }
    getAdvise();
  }, []);
  return (
    <div
      className="text-amber-500 w-96 h-64 bg-dark-grayish-blue rounded-lg
    flex flex-col justify-start items-center p-4 gap-6 relative"
    >
      <span className="">ADVICE {advice?.id}</span>
      <p className="text-quote-size">"{advice?.advice}"</p>
      <span className="">
        <img
          src={'/images/pattern-divider-desktop.svg'}
          alt={'pattern divider'}
          width={'444'}
          height={'16'}
        />
      </span>
      <span className="absolute z-10 bottom-0 inset-x-0 bg-neon-green rounded-full w-10 h-10 margin-auto">
        {' '}
        <img
          src={'/images/icon-dice.svg'}
          alt={'icon dice'}
          width={'24'}
          height={'24'}
        />
      </span>
    </div>
  );
}
