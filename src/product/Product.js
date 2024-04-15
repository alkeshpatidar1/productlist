import './Product.css'
import Cart from './Cart.js'
import { Component } from 'react'

class Product extends Component {

   constructor(props) {
         super(props);
         this.count= 0;
    }


    state={data:""};
    changeState = () => {
        this.props.cartData.push({
            id:this.props.id,
            caption: this.props.caption,
            price: this.props.price
        })
        console.log(this.props)
     };



  render() {
   return <div>
        <div className="product" >
            <p> id : {this.props.id} </p>
            <p> caption : {this.props.caption} </p>
            <p> price : {this.props.price} </p>
            <button className="product button" onClick={this.props.handler}> Add to cart </button>
        </div>
    </div>
  };
}

export default Product;
