import { db } from "../../utils/firebase";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query
} from "firebase/firestore";

// GET ITEMS
export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((docSnap) => {
    items.push({
      id: docSnap.id,
      ...docSnap.data(),
    });
  });

  return items;
}

// ADD ITEM
export async function addItem(userId, item) {
  const docRef = await addDoc(collection(db, "users", userId, "items"), item);
  return docRef.id;
}

// DELETE ITEM (OPTIONAL CHALLENGE)
export async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}
