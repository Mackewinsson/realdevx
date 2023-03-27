import { getDocs, collection } from 'firebase/firestore';
import { db } from './FirebaseConfig';

const getUserData = async (uid) => {
  const querySnapshot = await getDocs(collection(db, 'users'));
  let data;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return data;
};

const FirebaseUserService = {
  getUserData
};

export default FirebaseUserService;
