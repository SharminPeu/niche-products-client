console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDKy8b0G9FVSUZb4JHuyPfVQE0SE1hLQXc",
//   authDomain: "watch-zone-76da0.firebaseapp.com",
//   projectId: "watch-zone-76da0",
//   storageBucket: "watch-zone-76da0.appspot.com",
//   messagingSenderId: "46239437117",
//   appId: "1:46239437117:web:63b739232c0c964f5b3554"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);