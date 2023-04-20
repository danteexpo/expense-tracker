import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4wG-eAXlxNy5GNaVA2Kel3JRJr5frn7Q',
  authDomain: 'expense-tracker-eea01.firebaseapp.com',
  projectId: 'expense-tracker-eea01',
  storageBucket: 'expense-tracker-eea01.appspot.com',
  messagingSenderId: '5436791039',
  appId: '1:5436791039:web:9c162ffbf0a530366694ca',
};

initializeApp(firebaseConfig);

const auth = getAuth();
// const db = getFirestore();

export { auth };
