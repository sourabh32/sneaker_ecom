import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
const collectionRef = collection(db, "sneakers");
export const fetchSneakerData = async ()=>{
    try{
      const querySnapshot = await getDocs(collectionRef)
      const documents = []
      querySnapshot.forEach((doc) => {
        documents.push(doc.data())
        
      });
      return documents;
    }
   catch(error){
    console.log(error)
    return []
   }
  }
  
  
  
  
  
  
  
  
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
  
  
  
  
  
  
  
  