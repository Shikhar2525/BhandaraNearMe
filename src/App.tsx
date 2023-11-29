import EventService from "./services/services";
import "./App.css";
import { useEffect } from "react";
import logo from "./static/images/logo.png";

function App() {
  const eventService = new EventService();

  const getData = async () => {
    const data = await eventService.getAllEvents();
    console.log(data);
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="App">
      <img
        alt="logo"
        src={logo}
        style={{ height: "100px", width: "100px", margin: "50px" }}
      />
    </div>
  );
}

export default App;
