import "./App.css";
import { useState, createContext, useEffect } from "react";
import * as component from "./Imports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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
    const [comparisonArray, setComparisonArray] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(emptyAll());
    }, []);

    useEffect(() => {
        if (Object.keys(currentUser).length === 0) {
            dispatch(emptyAll());
        }
    }, [currentUser]);

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
                setComparisonArray,
            }}
        >
            <BrowserRouter>
                <ApolloProvider client={client}>
                    <component.NavBar />
                    <component.FixedNavBar />
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<component.Home />}
                        ></Route>
                        <Route
                            path="/category/:categoryID"
                            element={<component.CategoryPage />}
                        ></Route>
                        <Route
                            path="/product/:id"
                            element={<component.ProductDetail />}
                        ></Route>
                        <Route
                            exact
                            path="/success/true"
                            element={<component.Complete />}
                        ></Route>
                        <Route
                            exact
                            path="/success/false"
                            element={<component.Failure />}
                        ></Route>
                        <Route
                            path="/wishList"
                            element={<component.WishList />}
                        ></Route>
                        <Route
                            path="/search"
                            element={<component.Search />}
                        ></Route>
                        <Route
                            path="/registerLogin"
                            element={<component.User />}
                        ></Route>
                        <Route
                            path="/comparison"
                            element={<component.Comparison />}
                        ></Route>
                        <Route
                            path="/faqHelp"
                            element={<component.FAQ />}
                        ></Route>
                        <Route
                            path="/contact"
                            element={<component.Contact />}
                        ></Route>
                    </Routes>
                    <component.Footer />
                    <component.ToTopPageButton />
                </ApolloProvider>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
