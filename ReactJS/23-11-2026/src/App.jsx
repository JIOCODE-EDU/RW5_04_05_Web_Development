import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import ErrorPage from "./pages/404";
import Product from "./pages/Product";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import OldProduct from "./pages/OldProduct";

function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/feature" element={<Features />}></Route>
          <Route path="/product" element={<Product/>}>
            <Route path="/product/newproduct" element={<NewProduct/>}></Route>
            <Route path="/product/oldproduct" element={<OldProduct/>}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
