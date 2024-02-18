import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Base from "./components/Base";
import baseBackground from "./assets/FogInForest.jpg";

function App() {
  return <Base authComponent={<Login />} backgroundImage={baseBackground} />;
}

export default App;
