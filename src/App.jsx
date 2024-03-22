import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, Contact, Cart, Product, Success } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/success" element={<Success />}/>
      </Route>
    </Routes>
  );
}

export default App;
