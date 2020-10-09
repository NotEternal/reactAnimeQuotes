import React from 'react';
import '../../scss/mainAnimeQuote.scss';

function MainAnimeQuote({ randomQuote, quoteLoading }) {
  return (
    <article className={`anime-quote ${quoteLoading ? '' : 'loading'}`}>
      <h2 className="anime-quote__title">{randomQuote.anime}</h2>
      <p className="anime-quote__character">{randomQuote.character}</p>
      <p className="anime-quote__description">{randomQuote.quote}</p>
    </article>
  );
}

export default MainAnimeQuote;
