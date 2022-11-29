import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from "react-firebase-hooks/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnOPsHKX1iInzUrE3slG4MZjUdjfN87YY",
  authDomain: "smart-rentals-80530.firebaseapp.com",
  projectId: "smart-rentals-80530",
  storageBucket: "smart-rentals-80530.appspot.com",
  messagingSenderId: "840659999675",
  appId: "1:840659999675:web:e8edfea291b38fcaedc29e",
  measurementId: "G-LG4P95QV08"
};

// Initialize Firebase
// const auth = firebase.auth();
// const firestore = firebase.firestore();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function Messages() {


    return (
        <div>
            Messages
        </div>
    )
}

export default Messages