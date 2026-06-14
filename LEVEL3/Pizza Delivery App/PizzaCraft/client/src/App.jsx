import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BuildPizza from "./pages/BuildPizza";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
return ( <BrowserRouter> <Routes>

```
    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/login"
      element={<Login />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

    <Route
      path="/build"
      element={<BuildPizza />}
    />

    <Route
      path="/cart"
      element={<Cart />}
    />

    <Route
      path="/checkout"
      element={<Checkout />}
    />

  </Routes>
</BrowserRouter>


);
}

export default App;
