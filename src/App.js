import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import ToDos from "./components/ToDos";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* Como NavBar está fuera de las Routes, se va a mostrar siempre */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ToDos />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
