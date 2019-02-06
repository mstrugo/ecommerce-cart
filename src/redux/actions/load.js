import { LOAD_CATEGORIES, LOAD_PRODUCTS } from '~constants/actionsKeys';


const loadCategories = (categories) => {
  return {
    type: LOAD_CATEGORIES,
    categories
  }
};

const loadProducts = (products) => {
  return {
    type: LOAD_PRODUCTS,
    products
  }
};


export default { loadCategories, loadProducts };
