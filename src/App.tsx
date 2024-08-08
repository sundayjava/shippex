import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
