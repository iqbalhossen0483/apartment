import { firebaseConfig } from "./firebase.confiq";
import { initializeApp } from "firebase/app";

const firebaseInit = () => {
  return initializeApp(firebaseConfig);
};

export default firebaseInit;
