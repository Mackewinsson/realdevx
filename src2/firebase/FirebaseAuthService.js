import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from './FirebaseConfig';

const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logOutUser = () => {
  return signOut(auth);
};

const sendPasswordResetEmail = (email) => {
  return sendPasswordResetEmail(email);
};

const FirebaseAuthService = {
  registerUser,
  loginUser,
  logOutUser,
  sendPasswordResetEmail
};

export default FirebaseAuthService;
