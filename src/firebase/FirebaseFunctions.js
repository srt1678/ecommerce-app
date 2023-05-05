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
import { addToCart } from "../redux/reduxReducer";

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

export const addToCartToFirebase = async (
    data,
    detailData,
    image,
    currentUser,
    selectSize,
    quantity,
    setLoginAlertType,
    setLoginAlert,
    dispatch
) => {
    if (Object.keys(currentUser).length === 0) {
        setLoginAlertType("Error! Please sign in first!");
        setLoginAlert(true);
    } else {
        try {
            setDoc(
                doc(
                    collectionRef,
                    `${currentUser.uid}/cartList/${data.product.data.id}`
                ),
                {
                    title: detailData.title,
                    description: detailData.description,
                    price: detailData.newPrice,
                    image: image[0],
                }
            );
            const sizeCount = await sizeExistCount(
                data,
                currentUser,
                selectSize
            );
            setDoc(
                doc(
                    collectionRef,
                    `${currentUser.uid}/cartList/${data.product.data.id}/size/${selectSize}`
                ),
                { quantity: sizeCount + quantity }
            );
            addItemToCartBackEnd(
                data.product.data.id,
                detailData.title,
                detailData.description,
                detailData.newPrice,
                image[0],
                quantity,
                selectSize,
                dispatch
            );
        } catch (err) {
            setLoginAlertType(err.message);
            setLoginAlert(true);
        }
    }
};

const sizeExistCount = async (data, currentUser, selectSize) => {
    const docRef = query(
        collection(
            database,
            `users/${currentUser.uid}/cartList/${data.product.data.id}/size`
        )
    );
    const documentList = await getDocs(docRef);
    let count = 0;
    documentList.forEach((doc) => {
        if (doc.id === selectSize) {
            count = doc.data().quantity;
        }
    });
    return count;
};

const addItemToCartBackEnd = (
    id,
    title,
    description,
    price,
    image,
    quantity,
    selectSize,
    dispatch
) => {
    dispatch(
        addToCart({
            id,
            title,
            description,
            price,
            image,
            quantity,
            selectSize,
        })
    );
};
