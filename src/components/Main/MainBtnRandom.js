import React from 'react';
import '../../scss/randomBtn.scss';

function MainBtnRandom({ setAnimeQuote, quoteLoading }) {
  return (
    <button
      className={`btn-random ${quoteLoading ? '' : 'loading'}`}
      onClick={setAnimeQuote}
    >
      Random
    </button>
  );
}

export default MainBtnRandom;
