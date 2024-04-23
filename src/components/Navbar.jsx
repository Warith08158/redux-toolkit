import React, { useEffect } from "react";
import { CartIcon } from "../icons";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmount } from "../features/cart/cartSlice";

const Navbar = () => {
  const { amount, cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmount());
  }, [cartItems]);

  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
