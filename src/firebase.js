
// import { getStorage } from "firebase/storage";
// import initializationAuthentication from "./Pages/Authentication/firebase/firebase.init";

// const firebaseConfig = {
// 	apiKey: process.env.REACT_APP_API_KEY,
// 	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
// 	projectId: process.env.REACT_APP_PROJECT_ID,
// 	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// 	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// 	appId: process.env.REACT_APP_APP_ID,
// };

// const initializationAuthentication = () =>{
// 	initializeApp(firebaseConfig);
// }

// const app = initializationAuthentication();

// const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);



// export default storage;



// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCzGKXxJ8IUpYRa5xqQkWZOmUChSAlVKMo",
//   authDomain: "fir-auth-react-e8399.firebaseapp.com",
//   projectId: "fir-auth-react-e8399",
//   storageBucket: "fir-auth-react-e8399.appspot.com",
//   messagingSenderId: "962605851630",
//   appId: "1:962605851630:web:299f3aab1c08fb9fa9e4ff",
// };

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app);

// export { storage, app };


import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebaseConfig from "./Pages/Authentication/firebase/firebase.config";



const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };