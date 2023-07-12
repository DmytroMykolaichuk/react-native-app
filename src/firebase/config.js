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
  apiKey: 'AIzaSyBCGzfsT7KvNWdX3-vMkPsilb9qcmt6GY4',
  authDomain: 'app-native-react.firebaseapp.com',
  projectId: 'app-native-react',
  storageBucket: 'app-native-react.appspot.com',
  messagingSenderId: '185236211549',
  appId: '1:185236211549:web:249def3de93c0140748ab4',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const storage = getStorage(app);
