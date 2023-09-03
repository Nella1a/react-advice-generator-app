import React, { Component } from 'react';
import { Advice, Error } from '../../types/types';
import SearchTerm from '../Input';
import Layout from '../Layout';
import SearchResults from '../SearchResults';

type InitialState = {
  searchTerm: string;
  text: string;
  advice: Advice[];
  message?: Error | undefined;
};

class SearchAdvice extends Component<{}, InitialState> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      text: '',
      advice: [],
      message: undefined,
    };
  }

  onClickHandlerSearch = () => {
    if (this.state.text) {
      this.setState(() => {
        return { searchTerm: this.state.text };
      });

      this.setState(() => {
        return { advice: [] };
      });
      this.fetchAdvice(this.state.text);
    }
  };

  onChangeHandler = (event: string) => {
    this.setState({ text: event });
  };
  componentDidMount() {
    if (this.state.searchTerm) {
      this.fetchAdvice(this.state.searchTerm);
    }
  }

  cleanUp = () => {
    this.setState({ advice: [], message: undefined });
  };

  fetchAdvice = (searchTerm: string) => {
    fetch(`https://api.adviceslip.com/advice/search/${searchTerm}`)
      .then((result) => result.json())
      .then((apiResponse) => {
        console.log(apiResponse);
        if ('message' in apiResponse) {
          this.setState({ message: apiResponse.message });
        } else {
          this.setState({ advice: apiResponse.slips });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    const { text, advice, message } = this.state;
    const { onClickHandlerSearch, onChangeHandler } = this;

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
            setAdvice={this.cleanUp}
          />
          {message ? (
            <h1>{message?.text}</h1>
          ) : (
            advice && advice?.length > 0 && <SearchResults result={advice} />
          )}
        </section>
      </Layout>
    );
  }
}

export default SearchAdvice;
