import logo from '../logo.svg';
import Product from './Product.js'
import './Product.css'
import { Component } from 'react'
import Cart from './Cart.js'


const products = [
  { id: 1, caption: 'T-Shirt', price: 500 },
  { id: 2, caption: 'Shirt', price: 1000 },
  { id: 3, caption: 'Trousers', price: 1000 },
  { id: 4, caption: 'Jeans', price: 1500 },
  { id: 5, caption: 'Dress', price: 5500 },
  { id: 6, caption: 'Suit', price: 7500 }
]

const cartData = [{}];

class ProductList extends Component {

constructor(props) {
    super(props)
  }

 render() {
     const productData = products.map(prod => {
       return <Product key={prod.id}
           id={prod.id}
           caption={prod.caption}
           price = {prod.price}
           cartData = {cartData}
            handler = {this.props.handler}
            />
     });


      return <div id="app">
        <div className="product-list">
         {productData}
        </div>
       </div>

  }
}
export default ProductList
