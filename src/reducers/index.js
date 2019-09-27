import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../constants";

const initialState = {
  items: []
};

const filterItems = (array, action) =>
  array.filter(obj => obj.id !== action.payload.id);

const updateItem = (array, action) => {
  return array.map(obj => {
    const { id, item } = action.payload;
    if (obj.id !== id) {
      return obj;
    }

    return {
      ...obj,
      payload: item
    };
  });
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: filterItems(state.items, action)
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: updateItem(state.items, action)
      };
    default:
      return state;
  }
};

export default rootReducer;

