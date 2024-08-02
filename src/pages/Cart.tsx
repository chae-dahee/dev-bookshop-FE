import React, { useState } from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';
import CartItem from '../components/cart/CartItem';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { carts } = useCart();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckedItem = (id: number) => {
    if (checkedItems.includes(id)) {
      //언체크
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      //체크
      setCheckedItems([...checkedItems, id]);
      return;
    }
  };

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((item) => (
            <CartItem
              key={item.id}
              cart={item}
              checkedItems={checkedItems}
              onCheck={handleCheckedItem}
            />
          ))}
        </div>
        <div className="summary"></div>
      </CartStyle>
    </>
  );
};

const CartStyle = styled.div``;

export default Cart;
