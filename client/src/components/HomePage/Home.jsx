import Button from "../Button.jsx";
import HomeBlob from "./HomeBlob.jsx";
import Memoji from "./Memoji.jsx";
import BackgroundIcons from "../BackgroundIcons.jsx";
import "../../Default.css";
import "./Home.css";

function Home() {
    return (
        <div className={"home"}>
            <h1 className={"hero-text"}>Hi there 👋🏼, I'm <span className={"main-gradient-text"}>Matei!</span></h1>
            <h2 className={"hero-subtext"}>I’m a <span className={"main-gradient-text"}>Software Developer</span> based
                in
                Iași, Romania.</h2>
            <div className={"hero-small-text"}>Interested in Web Development and Online Privacy.</div>
            <div className={"hero-buttons"}>
                <Button buttonLink={"mailto: mateipruteanu1@gmail.com"} className={"main-gradient-button"}
                        buttonText={"GET IN TOUCH"}/>
                <Button buttonLink={"https://github.com/mateipruteanu"} className={"blue-button"}
                        buttonText={"GITHUB"}/>
                <Button buttonLink={"https://www.linkedin.com/in/mateipruteanu/"} className={"blue-button"}
                        buttonText={"LINKEDIN"}/>
            </div>
            <HomeBlob className={"home-blob"}/>
            <Memoji className={"memoji"}/>
            {/*<BackgroundIcons classname={"bg-icons"}/>*/}
        </div>
    )
}


export default Home;