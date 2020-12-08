import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD1KiQI3ucmMC_gom_Mv_cOan8XvxEmMfE',
  authDomain: 'vue-full-course-4b959.firebaseapp.com',
  projectId: 'vue-full-course-4b959',
  storageBucket: 'vue-full-course-4b959.appspot.com',
  messagingSenderId: '691523987264',
  appId: '1:691523987264:web:c6468869ef56f485ddbca5',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
