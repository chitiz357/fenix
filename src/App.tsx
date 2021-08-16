import "./App.css";
import { getAllUser } from "./service/serviceUser";

const App=()=> {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

const HomePage = () => {
  const allUser = getAllUser()
  
  return (
    <div>
      <h1>Club Acuatico Los Fenix</h1>
      <p>Somos un equipo comprometido con el crecimiento deportivo</p>
    </div>
  );
}



export default App;
