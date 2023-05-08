import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/HomePage/Home";
import { CategoryPage } from "./components/CategoryPage/CategoryPage";
import { ProductDetail } from "./components/ProductDetailPage/ProductDetail";
import { NavBar } from "./components/NavBar/NavBar";
import { FixedNavBar } from "./components/FixedNavBar/FixedNavBar";
import { Footer } from "./components/Footer/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Complete } from "./components/TransactionPage/Complete";
import { Failure } from "./components/TransactionPage/Failure";
import { WishList } from "./components/WishList/WishList";
import { Search } from "./components/SearchPage/Search";
import { Comparison } from "./components/ComparisonPage/Comparison";
import { useState, createContext, useEffect } from "react";
import { User } from "./components/LoginPage/User";
import { useDispatch } from "react-redux";
import { emptyAll } from "./redux/reduxReducer";
export const AppContext = createContext();

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_GRAPHQL_URL}/graphql`,
    cache: new InMemoryCache(),
    headers: {
        authorization: `bearer ${process.env.REACT_APP_STRAPI}`,
    },
});

function App() {
    const [searchQuery, setSearchQuery] = useState("");
    const [clickOnSearch, setClickOnSearch] = useState(false);
    const [signInRegisterTab, setSignInRegisterTab] = useState("signIn");
    const [loginAlert, setLoginAlert] = useState(false);
    const [loginAlertType, setLoginAlertType] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [comparisonArray, setComparisonArray] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(emptyAll());
    }, [])

    useEffect(() => {
        if(Object.keys(currentUser).length === 0){
            dispatch(emptyAll());
        }
    }, [currentUser])
    
    return (
        <AppContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                clickOnSearch,
                setClickOnSearch,
                signInRegisterTab,
                setSignInRegisterTab,
                loginAlert,
                setLoginAlert,
                loginAlertType,
                setLoginAlertType,
                currentUser,
                setCurrentUser,
                comparisonArray,
                setComparisonArray
            }}
        >
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <NavBar />
                    <FixedNavBar />
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route
                            path="/category/:categoryID"
                            element={<CategoryPage />}
                        ></Route>
                        <Route
                            path="/product/:id"
                            element={<ProductDetail />}
                        ></Route>
                        <Route
                            exact
                            path="/success/true"
                            element={<Complete />}
                        ></Route>
                        <Route
                            exact
                            path="/success/false"
                            element={<Failure />}
                        ></Route>
                        <Route path="/wishList" element={<WishList />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                        <Route path="/registerLogin" element={<User />}></Route>
                        <Route path="/comparison" element={<Comparison />}></Route>
                    </Routes>
                    <Footer />
                </ApolloProvider>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
