import React, { Component } from 'react';

import { CardList } from './cards/card-list';
import Form from './cards/form.component'

class App extends Component {
  state = {
    cards: [
      {
        name: 'Sam Anderson',
        avatar_url: 'https://avatars.githubusercontent.com/u/8435?v=3',
        company: 'Target'
      },
      {
        name: 'James Patrick',
        avatar_url: 'https://avatars.githubusercontent.com/u/8436?v=3',
        company: 'Wallmart'
      }
    ]
  };
  render() {
    return (
      <div style={{margin:'1em'}}>
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
