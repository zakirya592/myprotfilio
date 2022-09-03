import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAnzBKz84Kkgr7q3Fz5DQ224wWeTm1UAyI",
  authDomain: "react-8a2ff.firebaseapp.com",
  databaseURL: "https://react-8a2ff-default-rtdb.firebaseio.com",
  projectId: "react-8a2ff",
  storageBucket: "react-8a2ff.appspot.com",
  messagingSenderId: "240185348933",
  appId: "1:240185348933:web:8e4b210127c6b8d9e3e42c",
  measurementId: "G-XVMVTJE25L"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);