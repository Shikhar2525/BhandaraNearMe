import EventService from "./services/services";
import "./App.css";
import { useEffect } from "react";

function App() {
  const eventService = new EventService();

  const getData = async () => {
    const data = await eventService.getAllEvents();
    console.log(data);
  };

  useEffect(() => {
    getData();
  });

  return <div className="App">Bhandara Near Me!!!!!</div>;
}

export default App;
