import { app, database } from "./firebaseConfig";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    collection,
    setDoc,
    getDocs,
    doc,
    query,
    where,
} from "firebase/firestore";
import { addItemToCartBackEnd, addItemToWishListBackEnd } from './FirebaseStripe';

let auth = getAuth(app);
let googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

const collectionRef = collection(database, "users");

export const handleRegistration = async (
    firstName,
    lastName,
    registerEmail,
    registerPassword,
    registerPassword2,
    setCurrentUser,
    setLoginAlert,
    setLoginAlertType
) => {
    if (registerPassword !== registerPassword2) {
        setLoginAlertType(
            "Registration Failed! Confirmed Password is incorrect!"
        );
    }
    try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        try {
            setDoc(doc(collectionRef, user.user.uid), {
                firstName,
                lastName,
                email: registerEmail,
            });
            setCurrentUser({
                firstName,
                lastName,
                email: registerEmail,
                uid: user.user.uid,
            });
        } catch (err) {
            setLoginAlert(true);
            setLoginAlertType(err.message);
        }
    } catch (err) {
        setLoginAlert(true);
        setLoginAlertType(err.message);
    }
};

export const handleSignIn = async (
    loginEmail,
    loginPassword,
    setLoginAlert,
    setLoginAlertType,
    setCurrentUser,
    dispatch
) => {
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        );
        getUserBasicData(user.user, setCurrentUser);
        getUserCartList(user, dispatch);
        getUserWishList(user, dispatch);
    } catch (err) {
        setLoginAlert(true);
        setLoginAlertType(err.message);
    }
};

const getUserCartList = async (user, dispatch) => {
    const q = query(collection(database, `users/${user.user.uid}/cartList`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
        const { title, description, image, price } = doc.data();
        const q2 = query(
            collection(
                database,
                `users/${user.user.uid}/cartList/${doc.id}/size`
            )
        );
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((sizeDoc) => {
            addItemToCartBackEnd(
                doc.id,
                title,
                description,
                price,
                image,
                sizeDoc.data().quantity,
                sizeDoc.id,
                dispatch
            );
        });
    });
};

const getUserWishList = async (user, dispatch) => {
    const q = query(collection(database, `users/${user.user.uid}/wishList`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
        const {title, oldPrice, newPrice, image1, image2, isNew} = doc.data();
        addItemToWishListBackEnd(
            doc.id, title, oldPrice, newPrice, image1, image2, isNew, dispatch
        )
    })
}

const getUserBasicData = async (user, setCurrentUser) => {
    const q = query(
        collection(database, `users`),
        where("email", "==", user.email)
    );
    const querySnashot = await getDocs(q);
    querySnashot.forEach((doc) => {
        const { firstName, lastName, email } = doc.data();
        setCurrentUser({
            firstName,
            lastName,
            email,
            uid: doc.id,
        });
    });
};

export const signInWithGoogle = async (
    setCurrentUser,
    setLoginAlert,
    setLoginAlertType
) => {
    try {
        const user = await signInWithPopup(auth, googleProvider);
        const nameArray = user.user.displayName.split(" ");
        try {
            setDoc(doc(collectionRef, user.user.uid), {
                firstName: nameArray[0],
                lastName: nameArray[nameArray.length - 1],
                email: user.user.email,
            });
            setCurrentUser({
                firstName: nameArray[0],
                lastName: nameArray[nameArray.length - 1],
                email: user.user.email,
                uid: user.user.uid,
            });
        } catch (err) {
            setLoginAlert(true);
            setLoginAlertType(err.message);
        }
    } catch (err) {
        setLoginAlert(true);
        setLoginAlertType(err.message);
    }
};

export const logOut = async (
    setCurrentUser,
    setLoginAlert,
    setLoginAlertType
) => {
    try {
        await signOut(auth);
        setCurrentUser({});
    } catch (err) {
        setLoginAlert(true);
        setLoginAlertType(err.message);
    }
};


