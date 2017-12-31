import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><h2>Super Squad</h2></div>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default App;
