import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Base from "./components/Base";
import baseBackground from "./assets/FogInForest.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Base authComponent={<Login />} backgroundImage={baseBackground} />
          }
        />
        <Route
          path="/register"
          element={
            <Base
              authComponent={<Register />}
              backgroundImage={baseBackground}
            />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
