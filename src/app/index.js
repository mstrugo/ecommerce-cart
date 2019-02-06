import React, { Component } from 'react';
import ProductItem from './components/molecules/productItem';
import getProducts from '../services/products';
import './App.css';

const data = {
  "quantity": 308,
  "price": "$8,958",
  "available": false,
  "sublevel_id": 3,
  "name": "aute",
  "id": "58b5a5b1b6b6c7aacc25b3fb"
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: []
    }
  }

  componentDidMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        {}
        <ProductItem data={data} />
      </div>
    );
  }
}

export default App;
