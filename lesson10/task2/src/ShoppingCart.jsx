import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  state = {
    shoppingCart: [
      {
        id: '11',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '22',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render() {
    const { shoppingCart } = this.state;

    return (
      <div className="column">
        <CartTitle count={shoppingCart.length} userName={this.props.userName} />
        <ProductsList cartItems={shoppingCart} />
      </div>
    );
  }
}

export default ShoppingCart;
