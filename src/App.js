import React, { Component } from 'react';
import './App.css';

import { textB } from './helpers/texts';
import { getPrepositions, getVerbs, getVocabulary, getNumbers } from './helpers/booglanRules';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h2>How many prepositions are there in Text B?</h2>
        <div className="card">
          <p>There are {getPrepositions(textB).length} prepositions in Text B.</p>
        </div>

        <h2>How many verbs are there in Text B?</h2>
        <div className="card">
          <p>There are {getVerbs(textB).verbs.length} prepositions in Text B.</p>
        </div>

        <h2>How many of those verbs in Text B are in the subjunctive form?</h2>
        <div className="card">
          <p>There are {getVerbs(textB).subjunctiveVerbs.length} subjunctive verbs in Text B.</p>
        </div>

        <h2>Can you help the professor create the vocabulary list for text B?</h2>
        <textarea defaultValue={getVocabulary(textB)} />

        <h2>How many distinct pretty numbers are there in Text B?</h2>
        <div className="card">
          <p>In Text B, there are {getNumbers(textB).length} distinct(!) pretty numbers.</p>
        </div>

      </div>
    );
  }
}

export default App;
