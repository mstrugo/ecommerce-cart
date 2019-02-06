import { CART_CLEAR, CART_LOAD, CART_SAVE } from '~constants/actionsKeys';


const cartClear = (cart) => {
  return {
    type: CART_CLEAR,
    cart
  }
};

const cartLoad = (cart) => {
  return {
    type: CART_LOAD,
    cart
  }
};

const cartSave = (cart) => {
  return {
    type: CART_SAVE,
    cart
  }
};


export default { cartClear, cartLoad, cartSave };
