import urlKeys from '../constants/urlKeys';


export const getProducts = () => {
    fetch(urlKeys.mocks.products)
      .then( (res) => {
        return res.products;
      });
}
