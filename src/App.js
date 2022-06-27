import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import PrivacyFTF from "./components/PrivacyFTF";
import PrivacyMD from "./components/PrivacyMD";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/fly-to-fruits/privacy" element={<PrivacyFTF/>} />
                <Route path="/mood-diary/privacy" element={<PrivacyMD />} />
            </Routes>
        </HashRouter>
    );
}

function Home() {
    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    );
}
