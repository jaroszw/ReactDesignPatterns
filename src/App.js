import React from 'react';
import { compose } from 'recompose';

import RickAndMortyCharacters from './containers/RickAndMortyCharactersCards';

import CharactersCards from './components/CharactersCards/CharactersCards';

import withHandleError from './components/shared/hoc/withHandleError';
import withLoading from './components/shared/hoc/withLoading';

import './styles.css';

const CharactersCardsWithLoadingAndHandleError = compose(
  withLoading,
  withHandleError
)(CharactersCards);

function App() {
  return (
    <div className="container">
      <RickAndMortyCharacters
        render={({ characters, loading, error }) => (
          <React.Fragment>
            <CharactersCardsWithLoadingAndHandleError
              characters={characters}
              loading={loading}
              error={error}
            />
          </React.Fragment>
        )}
      />
    </div>
  );
}

export default App;
