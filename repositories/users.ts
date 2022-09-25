import { getFirestore } from "firebase/firestore";
import { app } from "../libs/firebase";
import { collection, getDocs } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
export default async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().rate}`);
    });
}

