import { SHOW_LOADER, FETCH_REVENUES, FETCH_COSTS, FETCH_SPENDS, FETCH_ORDERS } from "../types";

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [FETCH_REVENUES]: (state, { payload }) => ({
    ...state,
    revenues: payload,
    loading: false
  }),
  [FETCH_COSTS]: (state, { payload }) => ({
    ...state,
    costs: payload,
    loading: false
  }),
  [FETCH_SPENDS]: (state, { payload }) => ({
    ...state,
    spends: payload,
    loading: false
  }),
  [FETCH_ORDERS]: (state, { payload }) => ({
    ...state,
    orders: payload,
    loading: false
  }),
  DEFAULT: state => state
};

export const databaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}