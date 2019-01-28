import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SET_EMAIL_ADDRESS:
      return { ...state, email: action.payload };

    case SET_PASSWORD:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        password: '',
        error: 'Authentication Failed.'
      };

    default:
      return state;
  }
};