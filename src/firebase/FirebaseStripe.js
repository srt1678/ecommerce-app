import { database } from "./firebaseConfig";
import {
    collection,
    setDoc,
    getDocs,
    deleteDoc,
    doc,
    query,
} from "firebase/firestore";
import { addToCart, addToWishList } from "../redux/reduxReducer";

const collectionRef = collection(database, "users");
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

export const addItemToCartBackEnd = (
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

export const deleteItemFromCartFirebase = async (currentUser, singleItemId) => {
    const q = query(
        collection(
            database,
            `users/${currentUser.uid}/cartList/${singleItemId}/size`
        )
    );
    const querySnashot = await getDocs(q);
    querySnashot.forEach(async (sizeDoc) => {
        await deleteDoc(
            doc(
                database,
                `users/${currentUser.uid}/cartList/${singleItemId}/size`,
                `${sizeDoc.id}`
            )
        );
    });
    await deleteDoc(
        doc(database, `users/${currentUser.uid}/cartList/${singleItemId}`)
    );
};

export const addToWishListToFirebase = async (
    id,
    title,
    oldPrice,
    newPrice,
    image1,
    image2,
    isNew,
    setLoginAlertType,
    setLoginAlert,
    currentUser,
    dispatch
) => {
    if (Object.keys(currentUser).length === 0) {
        setLoginAlertType("Error! Please sign in first!");
        setLoginAlert(true);
    } else {
        try {
            setDoc(doc(collectionRef, `${currentUser.uid}/wishList/${id}`), {
                title,
                oldPrice,
                newPrice,
                image1,
                image2,
                isNew,
            });
            addItemToWishListBackEnd(
                id,
                title,
                oldPrice,
                newPrice,
                image1,
                image2,
                isNew,
                dispatch
            );
        } catch (err) {
            setLoginAlertType(err.message);
            setLoginAlert(true);
        }
    }
};

export const addItemToWishListBackEnd = (
    id,
    title,
    oldPrice,
    newPrice,
    image1,
    image2,
    isNew,
    dispatch
) => {
    dispatch(
        addToWishList({
            id,
            title,
            oldPrice,
            newPrice,
            image1,
            image2,
            isNew,
        })
    );
};

export const deleteItemFromWishListFirebase = async (
    currentUser,
    singleItemId
) => {
    await deleteDoc(
        doc(database, `users/${currentUser.uid}/wishList/${singleItemId}`)
    );
};
