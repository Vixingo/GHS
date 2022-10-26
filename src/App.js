import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Home />} path="/" />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
