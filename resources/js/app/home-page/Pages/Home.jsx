import React, { useEffect } from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";
import "./Styles/Home.scss";
// import background from "../../../img/home/home_background.svg";
import newPhones from "../../../../img/home/home__newPhones.svg"
import LoremImage from "../../../../img/home/homeImg.png"
import Review from "../../home-page/Components/HomePage/Review/Review";
function Home() {
  const { content, theme } = useCustomContexts();


    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add("show");
    //         } else {
    //             entry.target.classList.remove("show");
    //         }
    //     });
    // });
    // useEffect(() => {
    //     const hiddenElements = document.querySelectorAll(".hidden");
    //     hiddenElements.forEach((el) => observer.observe(el));
    // },[])
    

    return (
        <div className="main-homepage">
            <div className="welcome">
                <div className="welcome__project-name">
                    {content.home_smartRentals}
                </div>
            </div>
            <div className="main-content">
                <div className="content" id="sr">
                    <div className="content__img">
                        <img src={LoremImage} alt="" />
                    </div>
                    <div className="content__info">
                        <div className="content__info-text">
                            <span><p>WHY SR</p></span>
                            
                            <p> SR - Smart Property Management System. </p>
                            <p> Management system for property owners and tenants.</p>
                            <p> With our system you can easily manage the property you rent.</p>
                            <p> Create a rental offer, communicate with your tenant, check your property details - smart, fast, in one place.</p>
                        
                            {/* Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Nullam sit amet magna in magna gravida
                            vehicula. Proin mattis lacinia justo. Integer
                            rutrum, orci vestibulum ullamcorper ultricies, lacus
                            quam ultricies odio, vitae placerat pede sem sit
                            amet enim. Duis ante orci, molestie vitae vehicula
                            venenatis, tincidunt ac pede. */}
                       
                        </div>
                        <br />
                        <div className="content__info-video">
                            <iframe
                                className="video_player"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="content-1" id="product">
                    <div className="content-1__info">
                        <div className="content-1__info-text">
                            <span><p>PRODUCT</p></span>
            
                                <p> The main task for us is to save your time. </p>
                                <p>What can Smart Rentals do for you?</p>
                                <p>Generate Contracts</p>
                                <p>Monitor Profitability</p>
                                <p>Property Maitenance</p>
                                <p>Communicate with Tenants</p>
                                <p>Property Reports</p>
                                <p>Create Rental Offers</p>
                                {/* Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Nullam sit amet magna in magna gravida
                                vehicula. Proin mattis lacinia justo. Integer
                                rutrum, orci vestibulum ullamcorper ultricies, lacus
                                quam ultricies odio, vitae placerat pede sem sit
                                amet enim. Duis ante orci, molestie vitae vehicula
                                venenatis, tincidunt ac pede. */}
                            
                        </div>
                    </div>
                    <div className="content-1__img">
                        {" "}
                        <img src={newPhones} alt="" />
                    </div>
                </div>

                <div className="review" id="review">
                    <Review />
                </div>
            </div>
        </div>
    );
}

export default Home;
