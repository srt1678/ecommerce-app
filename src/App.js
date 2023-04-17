import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { CategoryPage } from "./components/CategoryPage/CategoryPage";
import { ProductDetail } from "./components/ProductDetailPage/ProductDetail";
import { NavBar } from "./components/NavBar/NavBar";
import { FixedNavBar } from "./components/FixedNavBar/FixedNavBar";
import { Footer } from "./components/Footer/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1338/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `bearer ${process.env.REACT_APP_STRAPI}`
  }
});

function App() {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <NavBar />
                <FixedNavBar />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        path="/category/:category"
                        element={<CategoryPage />}
                    ></Route>
                    <Route
                        path="/product/:id"
                        element={<ProductDetail />}
                    ></Route>
                </Routes>
                <Footer />
            </ApolloProvider>
        </BrowserRouter>
    );
}

export default App;
