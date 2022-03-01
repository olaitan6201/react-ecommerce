import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { 
    getFirestore, getDoc, doc,
    setDoc 
} from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAc5CdPtHkv2l7oZb7hD95yHfIG28My8mY",
    authDomain: "react-test-ecom-db.firebaseapp.com",
    projectId: "react-test-ecom-db",
    storageBucket: "react-test-ecom-db.appspot.com",
    messagingSenderId: "744852319394",
    appId: "1:744852319394:web:8f67a6c886a2944bfc7bfb",
    measurementId: "G-5BX1SDF0CY"
}

const app = initializeApp(config);
const db = getFirestore(app);

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const docRef = doc(db, "users", userAuth.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }


    return docSnap;
}

export const auth = getAuth();
// export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);
