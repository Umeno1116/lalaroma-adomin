import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase設定
const firebaseConfig = {
    apiKey: "AIzaSyC7G6fEEl3I3t_VgA9L4W4EWffN93jIjz0",
    authDomain: "blchatapp01.firebaseapp.com",
    databaseURL: "https://blchatapp01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "blchatapp01",
    storageBucket: "blchatapp01.appspot.com",
    messagingSenderId: "946023837075",
    appId: "1:946023837075:web:b1875ba812524007650c66",
    measurementId: "G-63E7RPV4X4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// appもエクスポートする
export { app, auth, firebaseConfig };
