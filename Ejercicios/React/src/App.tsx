import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Props from "./components/props/Props";
import State from "./components/state/State";
import RenderCondi from "./components/Renderizado-Condicional/RenderCondi";
import Refs from "./components/Refs/Refs";
import PaitingList from "./components/PaintingList/PaitingList";
import Hooks from "./components/Hooks/Hooks";
import Hoc from "./components/HOC/Hoc";
import Events from "./components/Events/Events";
import Context from "./components/Context/Context";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/props" element={<Props />} />
        <Route path="/state" element={<State />} />
        <Route path="/events" element={<Events />} />
        <Route path="/render-condicional" element={<RenderCondi />} />
        <Route path="/refs" element={<Refs />} />
        <Route path="/context" element={<Context />} />
        <Route path="/hoc" element={<Hoc />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/paitingList" element={<PaitingList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
