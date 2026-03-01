import { db } from "./firebase";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import type { Bandit, NewBandit } from "./Bandits";

const banditsCol = collection(db, "bandits");

// CREATE
export async function createBandit(input: NewBandit): Promise<string> {
  const ref = await addDoc(banditsCol, input);
  return ref.id;
}

// READ (all bandits, newest first)
export async function getBandits(): Promise<Bandit[]> {
  const q = query(banditsCol, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);

  return snap.docs.map((d) => {
    const data = d.data() as NewBandit;
    return { id: d.id, ...data };
  });
}

// UPDATE (partial update)
export async function updateBandit(
  id: string,
  updates: Partial<NewBandit>
): Promise<void> {
  await updateDoc(doc(db, "bandits", id), updates);
}

// DELETE
export async function deleteBandit(id: string): Promise<void> {
  await deleteDoc(doc(db, "bandits", id));
}
