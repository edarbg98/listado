import Header from "./components/header";
import Sections from "./components/section";
import "./App.css";

function App() {
  return (
    <div>
      <Header
        titulo="Mi gestor de Lenguaje de Programacion"
        informativo="Escribe que Lenguajes sabes"
      ></Header> <br />
      <Sections></Sections>
    </div>
  );
}

export default App;
