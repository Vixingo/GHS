import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Additional from "./pages/Additional";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProServices from "./pages/ProServices";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route
                        element={<Additional />}
                        path="/additional-offerings"
                    />

                    <Route element={<Contact />} path="/contact" />
                    <Route
                        element={<ProServices />}
                        path="/products-services"
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
