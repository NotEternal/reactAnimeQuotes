import React from 'react';
import '../../scss/animeQuote.scss';

function AnimeQuote({ randomQuote, quoteLoading }) {
  return (
    <article className={`anime-quote ${quoteLoading ? '' : 'loading'}`}>
      <h2 className="anime-quote__title">
        {randomQuote ? randomQuote.anime : 'Nothing =('}
      </h2>
      <p className="anime-quote__character">
        {randomQuote ? randomQuote.character : '...'}
      </p>
      <p className="anime-quote__description">
        {randomQuote ? randomQuote.quote : '...'}
      </p>
    </article>
  );
}

export default AnimeQuote;
