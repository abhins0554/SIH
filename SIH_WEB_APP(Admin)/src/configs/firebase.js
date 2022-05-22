import { initializeApp } from 'firebase/app';
import {initializeAuth} from 'firebase/auth'


const firebaseConfig = {
    // provide firebase config here
    apiKey: "AIzaSyBCOTRzr-yEjfQ0Td0w1Vq4xMRaCYTjY-U",
    authDomain: "sihuttrakhandtourism.firebaseapp.com",
    projectId: "sihuttrakhandtourism",
    storageBucket: "sihuttrakhandtourism.appspot.com",
    messagingSenderId: "975075523871",
    appId: "1:975075523871:web:41569e1f8ac66b74f7842a",
    measurementId: "G-8LVK44L0BH"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app);