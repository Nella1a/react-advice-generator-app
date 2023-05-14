import React, { Component } from 'react';

class ErrorPage extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center gap-8 min-h-screen bg-dark-blue text-light-cyan font-bold">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    );
  }
}

export default ErrorPage;
