import { useContext } from "react";
import { FirebaseContex } from "../context/firebase/FirebaseProvider";

const useFirebase = () => {
  return useContext(FirebaseContex);
};

export default useFirebase;
