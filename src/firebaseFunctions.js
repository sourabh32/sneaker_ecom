import { getDocs } from "firebase/firestore";
import { auth, collectionRef, provider, provider2 } from "./firebaseConfig";

import { signInWithPopup, signOut } from "firebase/auth";

export const fetchSneakerData = async () => {
  try {
    const querySnapshot = await getDocs(collectionRef);
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });
    return documents;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGithub = async () => {
  try {
    const user = await signInWithPopup(auth, provider2);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
export const signInWithGoogle = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

// export const signInWithGooglePopup = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     return await createUserFromAuth(user);
//   } catch (error) {
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   }
// };

// const createUserFromAuth = async (user) => {
//   const userDocRef = doc(db, "users", user.uid);
//   const { displayName, email, photoURL } = user;
//   const userDocSnapshot = await getDoc(userDocRef);
//   if (userDocSnapshot.exists()) {
//     return { displayName, email, photoURL };
//   }
//   try {
//     const userData = {
//       displayName,
//       email,
//       photoURL,
//     };

//     await setDoc(userDocRef, userData);
//     return userData;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// to add multiple objects from an array as documents in firebase  collection

// const sneakerCollection = collection(db,"sneakers")
// export const addSneakers  = (data) =>{
//   try{
//      data.map(async(doc) => await addDoc(sneakerCollection,doc))
//      console.log("docs added in backend")
//   }
//   catch (error){
//     console.log(error)
//   }
// }

//code to get media download urls of media stored in firebase storage

// const storage = getStorage(app);
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"

// export const fetchImageUrls = async () => {
//   const imageFoldersRef = ref(storage, "sneakerImages");

//   try {
//     const folderSnapshot = await listAll(imageFoldersRef);
//     const imageUrls = await Promise.all(
//       folderSnapshot.items.map(async (itemRef) => {
//         const imgUrl = await getDownloadURL(itemRef);
//         return imgUrl;
//       })
//     );
//     return imageUrls;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };
