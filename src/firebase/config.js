// initialize the project
import { initializeApp } from 'firebase/app';
// Function for connecting the database to the project
import { getFirestore } from 'firebase/firestore';
// Function for connecting file storage to the project
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
// import { API_KEY } from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: 'AIzaSyD1LR2yh-MFZYy1ON3ZSwptG1vVnreDhm4',
  authDomain: 'react-native-app-ec253.firebaseapp.com',
  projectId: 'react-native-app-ec253',
  storageBucket: 'react-native-app-ec253.appspot.com',
  messagingSenderId: '73035882958',
  appId: '1:73035882958:web:991601951f13b632394b9f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
