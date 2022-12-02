import { ActionTypes } from '../constants/action-types';

const initialState = {
  products: [
    // {
    //   id: 1,
    //   title: 'Irfan Dayan',
    //   category: 'Programmer',
    // },
  ],
};
// export const productReducer = (state, action) => {
// switch (action.type) {

// destructure the action
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      // return empty object on remove selected product
      return {};

    default:
      return state;
  }
};
