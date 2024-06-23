import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FirstTask } from "./pages/FirstTask";
import { SecondTask } from "./pages/SecondTask";
import { ThirdTask } from "./pages/ThirdTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/FirstTask" element={<FirstTask />} />
        <Route path="/SecondTask" element={<SecondTask />} />
        <Route path="/ThirdTask" element={<ThirdTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
