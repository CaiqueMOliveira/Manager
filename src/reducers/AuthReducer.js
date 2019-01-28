import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SET_EMAIL_ADDRESS:
      return {
        ...state,
        email: action.payload
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false
      };

    case LOGIN_USER:
      return {
        ...state,
        error: '',
        loading: true
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        password: '',
        loading: false,
        error: 'Authentication Failed.'
      };

    default:
      return state;
  }
};