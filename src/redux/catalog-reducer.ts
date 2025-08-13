// import {ProfileAPI} from "../api/api";
import React from "react";
import {
  ProductType,
  // PostCommentsType, PostType, UserProfileType, UserType
} from "../utils/generalTypes";
import { ThunkAction } from "redux-thunk";
import { AppStateType, InferActionsTypes } from "./redux-store";
// import {UpdateStatusResponseType} from "../api/api";Ы
import { AuditAPI, CatalogAPI, ItemAPI } from "../api/api";
import { AxiosResponse } from "axios";
// Используем существующее изображение как placeholder
import prodImg from "../assets/images/home_page_kitchen.png";

type InitialStateType = {
  products: Array<ProductType>;
  currentProduct: ProductType | null;
  isShowPreloader: boolean;
  isLoadingProduct: boolean;
  error: string | null;
  basketItems: Array<ProductType>;
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;
let initialState: InitialStateType = {
  products: [], // Пустой массив - товары будут загружаться с бэкенда
  currentProduct: null,
  isShowPreloader: false,
  isLoadingProduct: false,
  error: null,
  basketItems: [],
};

const catalogReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SET-PRODUCTS":
      return {
        ...state,
        products: [...action.products],
        error: null,
      };
    case "SET-CURRENT-PRODUCT":
      return {
        ...state,
        currentProduct: action.product,
        isLoadingProduct: false,
        error: null,
      };
    case "SET-LOADING-PRODUCT":
      return {
        ...state,
        isLoadingProduct: action.isLoading,
        error: null,
      };
    case "SET-ERROR":
      return {
        ...state,
        error: action.error,
        isLoadingProduct: false,
      };
    case "SET-ITEM":
      return {
        ...state,
        basketItems: [...state.basketItems, action.item],
      };
    default:
      return state;
  }
};

type ActionsType = InferActionsTypes<typeof catalogActions>;

export const catalogActions = {
  onSetProducts: (products: Array<ProductType>) =>
    ({ type: "SET-PRODUCTS", products } as const),
  onSetCurrentProduct: (product: ProductType) =>
    ({ type: "SET-CURRENT-PRODUCT", product } as const),
  onSetLoadingProduct: (isLoading: boolean) =>
    ({ type: "SET-LOADING-PRODUCT", isLoading } as const),
  onSetError: (error: string) =>
    ({ type: "SET-ERROR", error } as const),
  onSetItem: (item: ProductType) => ({ type: "SET-ITEM", item } as const),
};

export const getProducts = (
  counter: string,
  material: string,
  type: string,
  price_range: string,
  sort: string,
  search_query: string
): ThunkType => {
  return async (dispatch) => {
    try {
      dispatch(catalogActions.onSetLoadingProduct(true));
      const response = await CatalogAPI.getAllProducts(
        counter,
        material,
        type,
        price_range,
        sort,
        search_query
      );
      console.log("Products loaded from API:", response.data);
      dispatch(catalogActions.onSetProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(catalogActions.onSetError("Не удалось загрузить товары"));
    } finally {
      dispatch(catalogActions.onSetLoadingProduct(false));
    }
  };
};

export const getProductById = (itemId: string): ThunkType => {
  return async (dispatch) => {
    try {
      dispatch(catalogActions.onSetLoadingProduct(true));
      
      const response = await ItemAPI.getItemById(itemId);
      console.log("Product by ID response:", response.data);
      dispatch(catalogActions.onSetCurrentProduct(response.data));
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      dispatch(catalogActions.onSetError("Не удалось загрузить товар"));
    }
  };
};

export const postAudit = (
  name: string,
  number: string,
  comment: string,
  items: string
): any => {
  console.log(name, number, comment, items, "red");
  return AuditAPI.getPostAudit(name, number, comment, items).then(
    (response: any) => {}
  );
};

export default catalogReducer;
