import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB7vFstLdmgtVc8JtTk51l3lfaCdckZFzs",
    authDomain: "comentaki-app2.firebaseapp.com",
    databaseURL: "https://comentaki-app2.firebaseio.com",
    projectId: "comentaki-app2",
    storageBucket: "comentaki-app2.appspot.com",
    messagingSenderId: "622576533964",
    appId: "1:622576533964:web:d64fdea3ec9c732e5b9d69"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase