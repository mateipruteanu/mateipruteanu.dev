// import React from "react";
import NavbarButtons from "./NavbarButtons.jsx";
import Name from "./Name.jsx";

function Navbar() {
    return (
        <div className={"navbar"}>
            <Name/>
            <NavbarButtons/>
        </div>
    );
}

export default Navbar;