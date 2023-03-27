import FirebaseAuthService from '../../firebase/FirebaseAuthService';
import FirebaseUserService from '../../firebase/FirebaseUserService';
export const GET_USER = 'GET_USER';

export const getUser = (uid) => async (dispatch) => {
  try {
    const data = await FirebaseUserService.getUserData(uid);
    console.log(data);
  } catch (error) {}
};
