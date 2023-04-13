import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { CategoryPage } from "./components/CategoryPage/CategoryPage";
import { ProductDetail } from "./components/ProductDetailPage/ProductDetail"; 
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/category/:category" element={<CategoryPage />}></Route>
                <Route path="/product/:id" element={<ProductDetail />}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
