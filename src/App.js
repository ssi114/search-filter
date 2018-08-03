import React, { Component } from 'react';
import './App.css';
import products from './products';
import Results from './components/Results';

class App extends Component {
  state = {
    "userInputVal": '',
    "filteredProduct": []
  }

  getSearchFilter = (e) => {
    const inputValue = e.target.value;
    this.setState({"userInputVal": inputValue})
  }

  searchResult = (e) => {
    e.preventDefault();
    const getUserStateVal = this.state.userInputVal;
    const filterProducts =  products.filter((product) => product.productName.toLowerCase().indexOf(getUserStateVal.toLowerCase()) > -1);

    this.setState({"filteredProduct": filterProducts})
  }

  render() {
    return (
      <div className="App">
       <form>
       <input type="text" placeholder="Search Here" onChange={e => {this.getSearchFilter(e)}}/>
       <button onClick={e => {this.searchResult(e)}}>Go</button>
       </form>
       { !this.state.filteredProduct.length || this.state.filteredProduct.map((value, key) => <Results key={key} productDetail={value}/>)}
      </div>
    );
  }
}

export default App;
