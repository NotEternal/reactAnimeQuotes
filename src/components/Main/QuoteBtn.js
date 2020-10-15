import React from 'react';
import '../../scss/quoteBtn.scss';

function QuoteBtn({ animeName, reqFunction, children, quoteLoading }) {
  return (
    <button
      className={`quote-btn ${quoteLoading ? '' : 'loading'}`}
      onClick={() => {
        animeName ? reqFunction(animeName) : reqFunction();
      }}
    >
      {children}
    </button>
  );
}

export default QuoteBtn;
