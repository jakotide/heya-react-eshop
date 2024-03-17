import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, Contact, Cart, Product } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/>
      </Route>
    </Routes>
  );
}

export default App;
