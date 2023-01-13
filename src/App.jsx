import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./component/NotFound";
import Singin from "./pages/Signin";
import Register from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Singin />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
