import Login from "./components/Login";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Base from "./components/Base";
import baseBackground from "./assets/FogInForest.jpg";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Layout from "./components/Layout.jsx";
import Product from "./components/Product.jsx";
import Order from "./components/Order.jsx";
import Customer from "./components/Customer.jsx";
import Transaction from "./components/Transaction.jsx";
import Message from "./components/Message.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
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

        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/messages" element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
