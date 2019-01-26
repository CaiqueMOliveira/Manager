import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  LOGIN_USER_SUCCESS
} from '../actions/types';
const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {

  console.log('action :', action);

  switch (action.type) {
    case SET_EMAIL_ADDRESS:
      return { ...state, email: action.payload };

    case SET_PASSWORD:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, logged: true };

    default:
      return state;
  }
};