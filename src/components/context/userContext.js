import { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase-config";
import { provider } from "../../firebase/firebase-config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const auth = getAuth();
  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);

  

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);
  const [idUserFirebase, setIdUserFirebase] = useState(null);


  const keepIdUserFirebase= async()=>{

    try {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const usersCollectionRef = collection(getFirestore(), "users");
        const q = query(usersCollectionRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs.map((doc) => ({
          id: doc.id
        }));
        setIdUserFirebase(userData[0].id) 
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (currentUser) {
      keepIdUserFirebase()
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      setLoadingData(false);
      setIdUserFirebase(null)
      
    });
    return unsubscribe;
  }, [currentUser]);

  //MODAL
  const [modalState, setModalState] = useState({
    signUpModal: false,
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signUpModal: false,
        signInModal: true,
      });
    }
    if (modal === "signUp") {
      setModalState({
        signUpModal: true,
        signInModal: false,
      });
    }
    if (modal === "close") {
      setModalState({
        signUpModal: false,
        signInModal: false,
      });
    }
  };
  return (
    <UserContext.Provider
      value={{
        modalState,
        toggleModals,
        signUp,
        signIn,
        currentUser,
        idUserFirebase,
        setIdUserFirebase
      }}
    >
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
