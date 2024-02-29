import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  productDetails: null,
};

export const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get all products of shop
  getAllProductsShopRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.products = action.payload;
  },
  getAllProductsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete product of a shop
  // deleteProductRequest: (state) => {
  //   state.isLoading = true;
  // },
  // deleteProductSuccess: (state, action) => {
  //   state.isLoading = false;
  //   state.message = action.payload;
  // },
  // deleteProductFailed: (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // },
  deleteProductRequest: (state) => {
    state.isLoading = true;
  },

  deleteProductSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },

  deleteProductFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  // get all products
  getAllProductsRequest: (state) => {
    state.isLoading = true;
  },
  getAllProductsSuccess: (state, action) => {
    state.isLoading = false;
    state.allProducts = action.payload;
  },
  getAllProductsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },

  // Fetch product details 
  getProductDetailsRequest: (state) => {
    state.isLoading = true;
  },
  getProductDetailsSuccess: (state, action) => {
    state.isLoading = false;
    state.productDetails = action.payload;
  },
  getProductDetailsFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // update product
  updateProductRequest: (state) => {
    state.isLoading = true;
  },
  updateProductSuccess: (state) => {
    state.isLoading = false;
    state.success = true;
  },
  updateProductFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
});
