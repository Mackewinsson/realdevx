import { SIGNIN_LOADING, SIGNIN, SIGNOUT } from '../actions/authActions';

const initialState = {
  user: null,
  isSignedIn: false,
  isLoading: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload.user,
        isSignedIn: true,
        isLoading: false,
        error: null
      };
    case SIGNOUT:
      return {
        ...state,
        user: null,
        isSignedIn: false,
        error: null
      };
    case SIGNIN_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
