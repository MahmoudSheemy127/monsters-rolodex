import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/SearchBox/SearchBox-component.jsx';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
      this.state = {
        Monsters:[],
        SearchField:''
      };
      // this.Filter = this.Filter.bind(this);
  }
  componentDidMount()  //life cycle method
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({ Monsters: users}))
  }
  Filter = () =>
  {
    const {Monsters, SearchField} = this.state;
    const FilteredMonsters = Monsters.filter(Monsters =>
    Monsters.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    return FilteredMonsters;
  }
  handleChange = (e) =>
  {
    this.setState({SearchField:e.target.value}, ()=>{console.log(this.state.SearchField)});
  }
  render()
  {
  const FilteredMonsters = this.Filter()
  return(

    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox
      placeholder ='Monster Name'
      handleChange ={this.handleChange}
      />
    <CardList Monsters={FilteredMonsters} />
    </div>
  );
}
}

export default App;
