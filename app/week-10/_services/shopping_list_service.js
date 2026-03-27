import { db } from "../../utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query
} from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const q = query(collection(db, "users", userId, "items"));
  const snapshot = await getDocs(q);

  snapshot.forEach((docSnap) => {
    items.push({
      id: docSnap.id,
      ...docSnap.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  const { id, ...cleanItem } = item;
  const docRef = await addDoc(collection(db, "users", userId, "items"), cleanItem);
  return docRef.id;
}

export async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}

export async function deleteAllItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);

  const deletions = snapshot.docs.map((d) =>
    deleteDoc(doc(db, "users", userId, "items", d.id))
  );

  await Promise.all(deletions);
}
