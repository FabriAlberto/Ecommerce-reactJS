/* import { query, orderBy, where, collection, getDocs } from '@firebase/firestore'; */
import { query, where, collection, getDocs } from 'firebase/firestore'
import { doc, getDoc } from "firebase/firestore";
import db from './FirebaseConfig';


export const firestoreFetch = async (categoria) => {
    let q;
    if (categoria) {
        q = query(collection(db, "products"), where('category', '==', categoria));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}
export const firestoreId = async (id) => {
    const docRef = doc(db, "products",`${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
         
         let firestoreItem ={
           id:id,
           ...docSnap.data()
         }
        return firestoreItem;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");

    }
    
}