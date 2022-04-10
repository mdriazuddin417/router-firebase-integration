import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import LogIn from "./component/LogIn/LogIn";
import Products from "./component/Products/Products";
import Register from "./component/Register/Register";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
