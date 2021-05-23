import * as actionTypes from '../actionTypes';

const initialState = {
  homeData: [],
  error: null,
  loading: true,
};

const fetchHomeSuccess = (state, action) => {
  console.log(action.payload.data);
  return {
    ...state,
    homeData: action.payload.data,
    loading: false,
  };
};

const fetchHomeFail = (state, action) => {
  return {
    ...state,
    error: action.payload.error,
    loading: false,
  };
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOME_SUCCESS:
      return fetchHomeSuccess(state, action);
    case actionTypes.FETCH_HOME_FAIL:
      return fetchHomeFail(state, action);
    default:
      return state;
  }
};

export default homeReducer;
