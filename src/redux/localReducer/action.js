import { SET_DATA_IN_LOCAL, SET_DELETED_DATA_IN_LOCAL, SET_DELETED_WISHLIST_DATA_IN_LOCAL, SET_QUANTITY_IN_LOCAL, SET_WISHLIST_DATA_IN_LOCAL } from "../actionType";

export const setDataInLocal = (key, value) => (dispatch) => {
    let existingCartItems = getDataFromLocal(key) || []
    console.log(existingCartItems)
    existingCartItems.push(value)
    localStorage.setItem(key, JSON.stringify(existingCartItems));
    dispatch({type:SET_DATA_IN_LOCAL, payload:value})
}

export const setDeletedDataInLocal = (key, value) => (dispatch) => {
    localStorage.setItem(key, JSON.stringify(value));
    dispatch({type:SET_DELETED_DATA_IN_LOCAL, payload:value})
}

export const setWishListDataInLocal = (key, value) => (dispatch) => {
    let existingCartItems = getDataFromLocal(key) || []
    existingCartItems.push(value)
    localStorage.setItem(key, JSON.stringify(existingCartItems));
    dispatch({type:SET_WISHLIST_DATA_IN_LOCAL, payload:value})
}

export const setDeletedWishListDataInLocal = (key, value) => (dispatch) => {
    localStorage.setItem(key, JSON.stringify(value));
    dispatch({type:SET_DELETED_WISHLIST_DATA_IN_LOCAL, payload:value})
}

export const setUpdatedQuantity = (key, data) => (dispatch) => {
    localStorage.setItem(key,JSON.stringify(data))
    dispatch({type:SET_QUANTITY_IN_LOCAL,payload:data})
}

// getting Data from LocalStorage.
export const getDataFromLocal = (key) => {
    return JSON.parse(localStorage.getItem(key))
}