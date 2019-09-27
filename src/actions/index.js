import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../constants";

const addItem = payload => ({
  type: ADD_ITEM,
  payload
});

const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
});

const editItem = payload => ({
  type: EDIT_ITEM,
  payload
});

export { addItem, deleteItem, editItem };

