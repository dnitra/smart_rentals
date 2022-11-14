import React from "react";
import "../../Pages/Styles/Home.scss";
import review_img_1 from "../../../../img/home/Reviews/review_1.svg";
import review_img_2 from "../../../../img/home/Reviews/review_2.svg";
import review_img_3 from "../../../../img/home/Reviews/review_3.svg";
import review_img_4 from "../../../../img/home/Reviews/review_4.svg";
import review_img_5 from "../../../../img/home/Reviews/review_5.svg";
import Item from "./Item";
import { useEffect } from "react";

function Review() {
    const reviewsData = [
        {
            img: "img/jake-nackos-IF9TK5Uy-KI-unsplash (1).jpg",
            author: "Jake Nackos",
            job: "UX Designer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate in quo sequi architecto nihil laudantium animi accusamus at, nesciunt libero ad eum, eligendi consequatur. Ducimus porro aliquam possimus iste.",
        },

        {
            img: "img/joseph-gonzalez-iFgRcqHznqg-unsplash (1).jpg",
            author: "Joseph Gonzales",
            job: "Tennis Coach",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh nisl, eleifend a lorem sed, facilisis tempor urna. Aliquam tincidunt. Soluta cupiditate in quo sequi architecto nihil laudantium animi accusamus at, nesciunt.",
        },

        {
            img: "img/stephanie-liverani-Zz5LQe-VSMY-unsplash (1).jpg",
            author: "Stephanie Liverani",
            job: "Frontend Developer",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate in quo sequi architecto nihil laudantium animi accusamus at, nesciunt libero ad eum, eligendi consequatur. Ducimus porro aliquam possimus iste.",
        },

        {
            img: "img/jurica-koletic-7YVZYZeITc8-unsplash (1).jpg",
            author: "Jurica Koletic",
            job: "Realtor",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium animi accusamus at, nesciunt. laudantium animi accusamus at, nesciunt libero ad eum, eligendi consequatur. Ducimus porro aliquam possimus iste.",
        },
    ];
    useEffect(() => {
        const btnPrevious = document.querySelector(".review__arrow_left");
        const btnNext = document.querySelector(".review__arrow_right");

        const img = document.querySelector(".review__img");
        const author = document.querySelector(".review__author");
        const job = document.querySelector(".review__job");
        const text = document.querySelector(".review__text");

        let currentReview = 0;

        const displayReview = (reviewNum) => {
            const review = reviewsData[reviewNum];
            img.src = review.img;
            author.textContent = review.author;
            job.textContent = review.job;
            text.textContent = review.text;
        };

        btnNext.addEventListener("click", () => {
            currentReview++;
            if (currentReview > reviewsData.length - 1) {
                currentReview = 0;
            }
            displayReview(currentReview);
        });

        btnPrevious.addEventListener("click", () => {
            currentReview--;
            if (currentReview < 0) {
                currentReview = reviewsData.length - 1;
            }
            displayReview(currentReview);
        });

        document.addEventListener("keydown", (e) => {
            // console.log(e.code);
            if (e.code === "ArrowLeft") {
                currentReview--;
                if (currentReview < 0) {
                    currentReview = reviewsData.length - 1;
                }
                displayReview(currentReview);
            }
        });
        document.addEventListener("keydown", (e) => {
            console.log(e.code);
            if (e.code === "ArrowRight") {
                currentReview++;
                if (currentReview > reviewsData.length - 1) {
                    currentReview = 0;
                }
                displayReview(currentReview);
            }
        });
    }, []);

    return (
        <>
            <h1 class="heading">Our Reviews</h1>
            <div class="review">
                <div class="review__img-container">
                    <img
                        class="review__img"
                        src="img/jake-nackos-IF9TK5Uy-KI-unsplash (1).jpg"
                        alt="Photo of a guy"
                    />
                </div>
                <div class="review__author">Jake Nackos</div>
                <div class="review__job">UX Designer</div>
                <div class="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta cupiditate in quo sequi architecto nihil laudantium
                    animi accusamus at, nesciunt libero ad eum, eligendi
                    consequatur. Ducimus porro aliquam possimus iste.
                </div>
                <div class="review__arrows">
                    <div class="review__arrow review__arrow_left">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ionicon"
                            viewBox="0 0 512 512"
                        >
                            <title>Chevron Back</title>
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="48"
                                d="M328 112L184 256l144 144"
                            />
                        </svg>
                    </div>
                    <div class="review__arrow review__arrow_right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ionicon"
                            viewBox="0 0 512 512"
                        >
                            <title>Chevron Forward</title>
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="48"
                                d="M184 112l144 144-144 144"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;
