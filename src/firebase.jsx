import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'


export const config = {
   apiKey: "AIzaSyDdFBXwIspjlfbGqQ5wW6JpH-GzxkayHhc",
  authDomain: "aastha-academy-test.firebaseapp.com",
  projectId: "aastha-academy-test",
  storageBucket: "aastha-academy-test.appspot.com",
  messagingSenderId: "445022289763",
  appId: "1:445022289763:web:9ec3fadb1b2b8de23e9d56",
  measurementId: "G-3HGPBQK6ZE"
}

const app = firebase.initializeApp(config)
export const auth = app.auth()
export const storage = app.storage();//storage
export const storageRef = storage.ref()
export const db = app.firestore();
export const database = app.database()
export default app