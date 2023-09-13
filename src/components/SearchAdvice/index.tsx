import React, { useEffect, useState } from 'react';
import { Advice, Error } from '../../types/types';
import SearchTerm from '../Input';
import Layout from '../Layout';
import SearchResults from '../SearchResults';

const SearchAdvice = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [text, setText] = useState('');
  const [advice, setAdvice] = useState<Advice[]>([]);
  const [message, setMessage] = useState<Error | undefined>(undefined);

  const onClickHandlerSearch = () => {
    if (text) {
      setSearchTerm(text);
      setAdvice([]);
    }
  };

  const onChangeHandler = (event: string) => {
    setText(event);
  };

  const cleanUp = () => {
    setAdvice([]);
    setMessage(undefined);
  };

  useEffect(() => {
    const fetchAdvice = (searchTerm: string) => {
      fetch(`https://api.adviceslip.com/advice/search/${searchTerm}`)
        .then((result) => result.json())
        .then((apiResponse) => {
          console.log(apiResponse);
          if ('message' in apiResponse) {
            setMessage(apiResponse.message);
          } else {
            setAdvice(apiResponse.slips);
          }
        })
        .catch((error) => {
          alert(error);
        });
    };
    if (searchTerm) {
      fetchAdvice(searchTerm);
    }
  }, [searchTerm]);

  console.log({ message });
  return (
    <Layout>
      <section
        className={
          'flex flex-col ustify-center items-center gap-4 h-screen w-full'
        }
      >
        <SearchTerm
          text={text}
          onClickHandlerSearch={onClickHandlerSearch}
          setText={onChangeHandler}
          setAdvice={cleanUp}
        />
        {message ? (
          <h1>{message?.text}</h1>
        ) : (
          advice && advice?.length > 0 && <SearchResults result={advice} />
        )}
      </section>
    </Layout>
  );
};

export default SearchAdvice;
