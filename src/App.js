import './App.css';
import ProductList from './product/ProductList.js'
import { Component } from 'react'

class App extends Component {

constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.cartList = [{}]
    this.state = {}
  }

  handler() {
    console.log("----------------")
    console.log(this.props)
    this.setState({
      cartMessage: 'Item has been added to cart'
    })
  }

  render() {
      return <div>
                <div className="cart">{this.state['cartMessage']}</div>
                 <div>
                    <h2>Product List : </h2>
                    <ProductList handler = {this.handler}/>
                 </div>


            </div>
    }
}

export default App;
