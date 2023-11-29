import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const eventDetailsRef = collection(db, "EventDetails");
class EventService {
  getAllEvents = async () => {
    const data = await getDocs(eventDetailsRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  };
}

export default EventService;
