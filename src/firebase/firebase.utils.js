
import firebase from 'firebase/app'
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA923vUr5zLJ2RgYbDczYzsYwBD8khNCMA",
  authDomain: "crwn-db-6f229.firebaseapp.com",
  databaseURL: "https://crwn-db-6f229-default-rtdb.firebaseio.com",
  projectId: "crwn-db-6f229",
  storageBucket: "crwn-db-6f229.appspot.com",
  messagingSenderId: "119175882516",
  appId: "1:119175882516:web:cd23a3009ef227b6980401",
  measurementId: "G-BWDZP52ZCB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if (!userAuth) {
    console.log(`Users: ${userAuth}`)
    return;
  };

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot =  await userRef.get();

  console.log(`snap shot extists: ${snapShot.exists}`);

  if(!snapShot.exists) {

    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })

    } catch(error) {
      console.log( 'error creating user', error);
    }


    
  }
  
  return userRef;


}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {

  auth.signInWithPopup(provider)

}


export default firebase;

// // console.log(firestore.collection('users').doc('Rct7r3fmUkpu4ifZ2Rxx').collection('cartItems'))
// firestore.collection('users').doc('Rct7r3fmUkpu4ifZ2Rxx').collection('cartItems').doc('iU2b5EJA28q8bUB2OOPc')
// firestore.doc('/users/Rct7r3fmUkpu4ifZ2Rxx/cartItems/iU2b5EJA28q8bUB2OOPc');
// firestore.collection('/users/Rct7r3fmUkpu4ifZ2Rxx/cartItems');