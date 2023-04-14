import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC03FsQw5aibFso-WlPkOpeINMBqcpKLbE",
  authDomain: "signin-dd60d.firebaseapp.com",
  projectId: "signin-dd60d",
  storageBucket: "signin-dd60d.appspot.com",
  messagingSenderId: "443237647260",
  appId: "1:443237647260:web:0c50088d335845a8e9be59",
  measurementId: "G-W6C6V2TRB5",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
