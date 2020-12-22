import React from 'react';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

class RickAndMortyCharactersCards extends React.Component {
  state = {
    characters: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(({ data: { results } }) => {
        this.setState({ characters: results, loading: false });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    console.log(this.props);
    return this.props.render(this.state);
  }
}

export default RickAndMortyCharactersCards;
