const FETCH_DATA_REQUEST = 'address/FETCH_DATA_REQUEST';
const FETCH_DATA_SUCCESS = 'address/FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'address/FETCH_DATA_FAILURE';

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  };
}

export function fetchDataFailure(err) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: err
  };
}

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
