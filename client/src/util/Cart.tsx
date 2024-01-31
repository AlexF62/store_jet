import React from 'react';
import { SlBasket } from 'react-icons/sl';

interface CartProps {
  className?: string;
}

const Cart: React.FC<CartProps> = ({ className }) => {
  return (
    <button className={className}>
      <SlBasket size={28} color='white'/>
    </button>
  );
};

export default Cart;