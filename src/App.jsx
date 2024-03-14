import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, Contact, Cart } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}/>
      </Route>
    </Routes>
  );
}

export default App;
