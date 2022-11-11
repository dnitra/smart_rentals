import React from "react";
import { useContent } from "./../Context/ContentContext";
import { useTheme } from "./../Context/ThemeContext";
import "./Styles/Home.scss";
import background from "../../../img/home/home_background.svg";

function Home() {
    const content = useContent();
    // const { theme } = useTheme();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return (
        <div className="main-homepage">
            <div className="welcome">
                <img src={background} alt="background" />
                <div className="welcome__project-name">SMART RENTALS</div>
            </div>
            <div className="content">
                <div className="content__img">IMAGE</div>
                <div className="content__info">
                    <p className="content__info-bold">Why SR</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Nullam sit amet magna in magna gravida vehicula.
                        Proin mattis lacinia justo. Integer rutrum, orci
                        vestibulum ullamcorper ultricies, lacus quam ultricies
                        odio, vitae placerat pede sem sit amet enim. Duis ante
                        orci, molestie vitae vehicula venenatis, tincidunt ac
                        pede.
                    </p>
                    <div className="content__info-video">VIDEO</div>
                </div>
            </div>
            <div className="content"></div>
        </div>
    );
}

export default Home;
