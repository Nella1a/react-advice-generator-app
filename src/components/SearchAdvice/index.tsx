import React, { useEffect, useState } from 'react';
import { ApiError, SearchAdviceType } from '../../types';
import SearchTerm from '../Input';
import Layout from '../layout';
import SearchResults from '../SearchResults';

export const setErrorMessage = (
  error: ApiError,
  setError: ({ text, type }: ApiError) => void,
) => {
  const { text, type } = error;
  setError({ type, text });
};

const SearchAdvice = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState(false);
  const [advice, setAdvice] = useState<SearchAdviceType>(undefined);
  const [error, setError] = useState<ApiError>(undefined);

  const onClickHandlerSearch = (event: any) => {
    if (searchTerm) {
      setSearch(true);
    }
    setAdvice(undefined);
  };

  const onChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
    setAdvice(undefined);
    setError(undefined);
  };

  useEffect(() => {
    if (searchTerm && search) {
      fetch(`https://api.adviceslip.com/advice/search/${searchTerm}`)
        .then((response) => response.json())
        .then((result) => {
          if ('slips' in result) {
            setAdvice(result);
          } else {
            setErrorMessage(result.message, setError);
          }
        })
        .catch((error) => {
          setErrorMessage(error.message, setError);
        });
      setSearch(false);
    }
  }, [searchTerm, search]);

  return (
    <Layout>
      <section
        className={'flex flex-col justify-center items-center  h-screen w-full'}
      >
        <div className="w-full md:w-11/12 flex flex-col items-center md:m-auto  h-full md:h-fit">
          <SearchTerm
            searchTerm={searchTerm}
            onClickHandlerSearch={onClickHandlerSearch}
            onChangeHandler={onChangeHandler}
          />
          {error ? (
            <h2 className="font-semibold w-full text-center mt-10 text-xl">
              {error?.text}
            </h2>
          ) : (
            advice &&
            advice.slips?.length > 0 && <SearchResults result={advice} />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SearchAdvice;
