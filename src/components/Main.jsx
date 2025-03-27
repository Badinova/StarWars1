import Home from "./Home.jsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {useContext, useState} from "react";
import {navItems} from "../utils/constants.js";
import AboutMe from "./AboutMe.jsx";
import {SWContexr} from "../utils/context.js";

const Main = () => {
    const {page} = useContext(SWContexr);


    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>
        default:
            return <Home/>
    }
};

export default Main;