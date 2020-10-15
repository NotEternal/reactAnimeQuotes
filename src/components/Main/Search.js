import React from 'react';
import '../../scss/search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeName: '',
    };
  }

  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Anime name"
          onBlur={(event) => {
            this.props.setAnimeName(event.target.value);
          }}
        ></input>
        {this.props.children}
      </div>
    );
  }
}

export default Search;
