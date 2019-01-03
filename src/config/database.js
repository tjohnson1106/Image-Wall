import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyBiHmyHHykOl84-8czsmqcB6PMY1iQxT_A",
  authDomain: "photowall-5c3cd.firebaseapp.com",
  databaseURL: "https://photowall-5c3cd.firebaseio.com",
  projectId: "photowall-5c3cd",
  storageBucket: "photowall-5c3cd.appspot.com",
  messagingSenderId: "140844162672"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
