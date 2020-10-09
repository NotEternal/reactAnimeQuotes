import React from 'react';
import '../../scss/main.scss';
import MainAnimePost from './MainAnimeQuote';
import MainBtnRandom from './MainBtnRandom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      randomQuote: {
        anime: 'Anime',
        character: 'Character',
        quote: 'Quote',
      },
    };
    this.setAnimeQuote = this.setAnimeQuote.bind(this);
    this.URL_ANIME_SITE = 'https://animechanapi.xyz/api/quotes/random';
  }

  render() {
    return (
      <main className="main">
        <section className="intro">
          <h2 className="intro__title">Сlick to generate random quote</h2>
          <div className="intro__quote-wrapper">
            <MainAnimePost
              randomQuote={this.state.randomQuote}
              quoteLoading={this.state.loading}
            />
          </div>
          <MainBtnRandom
            setAnimeQuote={this.setAnimeQuote}
            quoteLoading={this.state.loading}
          />
        </section>
      </main>
    );
  }

  setAnimeQuote() {
    this.setState({
      loading: false,
    });

    (async () => {
      const data = await fetch(this.URL_ANIME_SITE);
      const dataObj = await data.json();
      const quote = dataObj.data[0];

      if (quote) {
        this.setState({
          randomQuote: quote,
          loading: true,
        });
      }
    })();
  }
}

export default Main;
