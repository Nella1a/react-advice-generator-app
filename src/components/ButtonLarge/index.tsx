import React, { Component } from 'react';

type Props = {
  text: string;
};

class ButtonLarge extends Component<Props> {
  render() {
    const { text } = this.props;
    return (
      <>
        <button
          className={
            'w-44 h-12  text-center text-dark-blue font-manrope bg-neon-green hover:shadow-3xl hover:bg-neon-green font-bold rounded-lg'
          }
        >
          {text}
        </button>
      </>
    );
  }
}

export default ButtonLarge;
