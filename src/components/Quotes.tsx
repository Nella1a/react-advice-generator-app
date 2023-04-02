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
    <section>
      <div className="text-amber-500">
        <span className="text-7xl	">ADVICE {advice?.id}</span>
        <p>{advice?.advice}</p>
      </div>
    </section>
  );
}
