import { ITEM_ADD, ITEM_REMOVE } from '~constants/actionsKeys';


const itemAdd = (item) => {
  return {
    type: ITEM_ADD,
    item
  }
};

const itemRemove = (item) => {
  return {
    type: ITEM_REMOVE,
    item
  }
};


export default { itemAdd, itemRemove };
