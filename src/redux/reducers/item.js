import actionKeys from '../../constants/actionsKeys';


const initState = {
  id: null,
  quantity: 0,
};


const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case actionKeys.ITEM_ADD:
      console.log("ITEM_ADD");
      return state;
    case actionKeys.ITEM_REMOVE:
      console.log("ITEM_REMOVE");
      return state;

    default:
      console.log("ITEM_DEFAULT");
      return state;
  }
};


export default itemReducer;
