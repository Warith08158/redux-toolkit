import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancel } from "../features/modal/modal";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const { display } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  if (display) {
    return (
      <aside className="modal-container">
        <div className="modal">
          <h4>remove all items from your shoppping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                dispatch(clearCart());
                dispatch(cancel());
              }}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => dispatch(cancel())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    );
  }
};

export default Modal;
