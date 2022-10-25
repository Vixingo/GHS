import React from "react";
import Choose from "../components/Choose/Choose";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Team from "../components/Team/Team";
import Team2 from "../components/Team/Team2";
function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Choose />
            <Team />
            <Team2 />
        </>
    );
}

export default Home;
