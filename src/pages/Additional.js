import React from "react";
import AddHero from "../components/AddHero/AddHero";
import Greenhouse2 from "../components/Greenhouse/Greenhouse2";
import Title from "../components/Title/Title";

function Additional() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#fff",
                }}
            >
                <AddHero />
                <Greenhouse2 />
            </div>
        </>
    );
}

export default Additional;
