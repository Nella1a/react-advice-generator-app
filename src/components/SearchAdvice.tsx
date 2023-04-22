import React, { useEffect, useState } from 'react';
import SearchTerm from './input';
import Layout from './layout';
import SearchResults from './SearchResults';

type Advice = {
  id: number;
  advice: string;
  date: string;
};

export type SearchResultTypes = {
  total_results?: string;
  query?: string;
  slips?: Advice[];
};

export default function SearchAdvice() {
  const [searchTerm, setSearchTerm] = useState('');
  const [text, setText] = useState('');
  const [apiResponse, setApiResponse] = useState<SearchResultTypes | undefined>(
    {},
  );

  const onClickHandlerSearch = () => {
    if (setText) {
      setSearchTerm(text);
    }
  };

  useEffect(() => {
    async function searchAdvice() {
      const response = await fetch(
        `https://api.adviceslip.com/advice/search/${searchTerm}`,
        {
          method: 'GET',
        },
      );
      const result = await response.json();
      setApiResponse(result);
      console.log('RESULT: ', result);
    }
    if (searchTerm) {
      searchAdvice();
      setSearchTerm('');
      setText('');
    }
  }, [searchTerm]);

  return (
    <Layout>
      <section className={'flex flex-col'}>
        <SearchTerm
          text={text}
          onClickHandlerSearch={onClickHandlerSearch}
          setText={setText}
        />
        <SearchResults result={apiResponse} />
      </section>
    </Layout>
  );
}
