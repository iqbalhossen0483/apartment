import { createContext, FC, ReactNode } from "react";
import Firebase from "../../firebase/Firebase";
import { FirebaseSchema } from "../../firebase/Firebase";

export const FirebaseContex = createContext<FirebaseSchema | null>(
  null
);

interface Props {
  children: ReactNode;
}

const FirebaseProvider: FC<Props> = ({ children }) => {
  const FB: FirebaseSchema = Firebase();

  return (
    <FirebaseContex.Provider value={FB}>
      {children}
    </FirebaseContex.Provider>
  );
};

export default FirebaseProvider;
