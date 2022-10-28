import React from "react";
import Advocacy from "./Advocacy";
import Automation from "./Automation";
import SystemsDesign from "./SystemsDesign";
import TechnicalTeam from "./TechnicalTeam";

function ProHero() {
    return (
        <div>
            <section className="ProHero" style={{ backgroundColor: "#fff" }}>
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <TechnicalTeam />
                    </div>
                    <hr />
                    <div className="row pt-5 pb-5">
                        <SystemsDesign />
                    </div>
                    <hr />
                    <div className="row pt-5 pb-5">
                        <Automation />
                    </div>
                    <hr />
                    <div className="row pt-5 pb-5">
                        <Advocacy />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProHero;
