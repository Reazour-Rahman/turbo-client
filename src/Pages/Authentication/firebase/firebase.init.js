import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializationAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializationAuthentication;