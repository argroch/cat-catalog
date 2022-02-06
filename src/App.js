import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { loremIpsum } from "lorem-ipsum";

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const catNames = require('cat-names');
    let kitties = [];
    for (var i = 1; i < 13; i++){
      let kitty = {id: i, name: catNames.random(), description: loremIpsum()};
      kitties.push(kitty);
    }
    // Old way of populating cats: User API...
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ cats: users }))
    this.setState({ cats: kitties });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => 
        cat.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Cat Catalog</h1>
        <SearchBox 
          placeholder="Got a Certain Kitty in Mind?" 
          handleChange={this.handleChange}
        />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
