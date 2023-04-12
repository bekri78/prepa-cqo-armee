import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth"
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBdRSTqbjjOEzk1IDRi3dMRDRg8ikz-5fw", 
    authDomain: "prepa-cq-o.firebaseapp.com",
    projectId: "prepa-cq-o",
    storageBucket: "prepa-cq-o.appspot.com",
    messagingSenderId: "1011002803059",
    appId: "1:1011002803059:web:6ecdae8a590036ac373b06",
    measurementId: "G-DLFMXE60J3"
  };


 

  const firebaseApp = initializeApp(firebaseConfig)
  export const db = getFirestore(firebaseApp)
  export const auth = getAuth(firebaseApp)
 
  
  