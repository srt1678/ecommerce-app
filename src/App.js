import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { Product } from "./components/Product/Product";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product" element={<Product />}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
