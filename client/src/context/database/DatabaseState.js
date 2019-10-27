import React, {useReducer} from 'react'
import axios from 'axios'
import { DatabaseContext } from './databaseContext'
import { databaseReducer } from './databaseReducer'
import {
  SHOW_LOADER,
  FETCH_REVENUES,
  FETCH_COSTS,
  FETCH_SPENDS,
  FETCH_ORDERS
} from "../types";

const url = process.env.REACT_APP_DB_URL

export const DatabaseState = ({children}) => {
  const initialState = {
    revenues: [],
    costs: [],
    spends: [],
    orders: [],
    loading: false
  };
  const [state, dispatch] = useReducer(databaseReducer, initialState)

  const showLoader = () => dispatch({type: SHOW_LOADER})
  
  const fetchRevenues = async () => {
    showLoader();
    const res = await axios.get(`${url}/revenue`);

    dispatch({
      type: FETCH_REVENUES,
      payload: res.data
    });
  };

  const fetchCosts = async () => {
    showLoader();
    const res = await axios.get(`${url}/costs`);

    dispatch({
      type: FETCH_COSTS,
      payload: res.data
    });
  };

  const fetchSpends = async () => {
    showLoader();
    const res = await axios.get(`${url}/more`);

    dispatch({
      type: FETCH_SPENDS,
      payload: res.data
    });
  };

  const fetchOrders = async () => {
    showLoader();
    const res = await axios.get(`${url}/orders`);

    dispatch({
      type: FETCH_ORDERS,
      payload: res.data
    });
  };

  return (
    <DatabaseContext.Provider
      value={{
        showLoader,
        fetchRevenues,
        fetchCosts,
        fetchSpends,
        fetchOrders,
        loading: state.loading,
        revenues: state.revenues,
        costs: state.costs,
        spends: state.spends,
        orders: state.orders
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}