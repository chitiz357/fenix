import { useEffect, useState } from "react";
import "./App.css";
import { NavBar } from "./components";
import { getAllUser } from "./service/serviceUser";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
};

const HomePage = () => {
  const [userd, setUserd] = useState([{ _name: "" }]);

  useEffect(() => {
    getAllUser().then((response) => {
      setUserd(response);
    });
  }, []);

  return (
    <div>
      <h1>Club Acuatico Los Fenix</h1>
      <p>Somos un equipo comprometido con el crecimiento deportivo</p>
      <ul>
        {userd.map((user) => {
          return (
            <li key={user._name}>
              <p>{user._name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );

};

export default App;
