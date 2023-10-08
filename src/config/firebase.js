import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAJqpPVS2DczF1azuOfJbAykfGuADtA7SA",
  authDomain: "travel-website-26d38.firebaseapp.com",
  projectId: "travel-website-26d38",
  storageBucket: "travel-website-26d38.appspot.com",
  messagingSenderId: "199121382039",
  appId: "1:199121382039:web:38e1f316d0bd7fa04957d2",
  measurementId: "G-K1RHFBK8TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth= getAuth(app);
 const db=getFirestore(app);
 export {auth,db};
