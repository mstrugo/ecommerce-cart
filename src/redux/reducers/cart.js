import actionKeys from '../../constants/actionsKeys';


const initState = {
  items: 0,
};


const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case actionKeys.CART_CLEAR:
      console.log("CART_CLEAR");
      return state;
    case actionKeys.CART_LOAD:
      console.log("CART_LOAD");
      return state;
    case actionKeys.CART_SAVE:
      console.log("CART_SAVE");
      return state;
    case actionKeys.CART_ITEM_ADD:
      console.log("CART_ITEM_ADD");
      return state;
    case actionKeys.CART_ITEM_REMOVE:
      console.log("CART_ITEM_REMOVE");
      return state;

    default:
      console.log("CART_DEFAULT");
      return state;
  }
};


export default cartReducer;
