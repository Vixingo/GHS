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
                    <div className="row pt-5 pb-5" id="TechnicalTeam">
                        <TechnicalTeam />
                    </div>
                    <hr />
                    <div className="row pt-5 pb-5" id="SystemsDesign">
                        <SystemsDesign />
                    </div>
                    <hr />
                    <div className="row pt-5 pb-5 " id="Automation">
                        <Automation />
                    </div>
                    <hr />
                    <div className="row pt-5 pb-5" id="Advocacy">
                        <Advocacy />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProHero;
