import FirebaseAuthService from '../../firebase/FirebaseAuthService';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const SIGNIN_LOADING = 'SIGNIN_LOADING';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';
export const CLEAN_ERROR = 'CLEAN_ERROR';

export const signIn = (userId, password) => async (dispatch) => {
  dispatch({ type: SIGNIN_LOADING });
  try {
    const { user } = await FirebaseAuthService.loginUser(userId, password);
    console.log(user);
    dispatch({
      type: SIGNIN,
      payload: {
        user
      }
    });
  } catch (error) {
    dispatch({
      type: SIGNIN_FAILED,
      payload: {
        error
      }
    });
  }
};

export const signOut = () => async (dispatch) => {
  await FirebaseAuthService.logOutUser();
  dispatch({
    type: SIGNOUT
  });
};
