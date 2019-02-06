import { urlKeys } from '~constants/urlKeys';


const getCategories = () => {
    fetch(urlKeys.mocks.categories)
      .then( (res) => {
        return res.categories;
      });
}


export default getCategories;
