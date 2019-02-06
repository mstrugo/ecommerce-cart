import actionKeys from '../../constants/actionsKeys';


const initState = {
  products: [],
  categories: [],
};


const loadReducer = (state = initState, action) => {
  switch (action.type) {
    case actionKeys.LOAD_CATEGORIES:
      console.log("LOAD_CATEGORIES");
      return state;
    case actionKeys.LOAD_PRODUCTS:
      console.log("LOAD_PRODUCTS");
      return state;

    default:
      console.log("LOAD_DEFAULT");
      return state;
  }
};


export default loadReducer;
