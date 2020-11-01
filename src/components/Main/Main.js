import React from 'react';
import '../../scss/main.scss';
import AnimeQuote from './AnimeQuote';
import Search from './Search';
import QuoteBtn from './QuoteBtn';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      animeName: '',
      randomQuote: {
        anime: 'Anime',
        character: 'Character',
        quote: 'Quote',
      },
      userQuote: {
        anime: 'Anime',
        character: 'Character',
        quote: 'Quote',
      },
    };
    this.URL_RANDOM_ANIME_QUOTE = 'https://animechanapi.xyz/api/quotes/random';
    this.URL_ANIME_QUOTE_BY_NAME = 'https://animechanapi.xyz/api/quotes?anime=';
  }

  componentDidMount() {
    this.setRandomAnimeQuote();
  }

  render() {
    return (
      <main className='main'>
        <section className='intro'>
          <div className='intro__container'>
            <h2 className='intro__title'>Сlick to generate random quote</h2>
            <div className='intro__quote-wrapper'>
              <AnimeQuote
                randomQuote={this.state.randomQuote}
                quoteLoading={this.state.loading}
              />
            </div>
            <QuoteBtn
              reqFunction={this.setRandomAnimeQuote}
              quoteLoading={this.state.loading}>
              Random
            </QuoteBtn>
          </div>
          <div className='intro__container'>
            <h2 className='intro__title'>
              Try to search quotes from your anime
            </h2>
            <AnimeQuote
              randomQuote={this.state.userQuote}
              quoteLoading={this.state.loading}
            />
            <Search
              setAnimeName={this.setAnimeName}
              quoteLoading={this.state.loading}>
              <QuoteBtn
                animeName={this.state.animeName}
                reqFunction={this.setUserAnimeQuote}
                quoteLoading={this.state.loading}>
                Search
              </QuoteBtn>
            </Search>
          </div>
        </section>
      </main>
    );
  }

  setRandomAnimeQuote = () => {
    this.setState({
      loading: false,
    });

    (async () => {
      const data = await fetch(this.URL_RANDOM_ANIME_QUOTE);
      const dataObj = await data.json();
      const quote = dataObj.data[0];

      this.setState({
        randomQuote: quote,
        loading: true,
      });
    })();
  };

  setUserAnimeQuote = (nameAnime) => {
    this.setState({
      loading: false,
    });

    const reqStrName = nameAnime.split(' ').join('');

    (async () => {
      const data = await fetch(this.URL_ANIME_QUOTE_BY_NAME + reqStrName);
      const dataObj = await data.json();
      const quote = dataObj.data[0];
      console.log(quote);

      if (quote) {
        this.setState({
          userQuote: quote,
        });
      } else {
        this.setState({
          userQuote: null,
        });
      }

      this.setState({
        loading: true,
        animeName: '',
      });
    })();
  };

  setAnimeName = (name) => {
    this.setState({
      animeName: name,
    });
  };
}

export default Main;
