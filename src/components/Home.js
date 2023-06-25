import React from "react";
import firstVec from "./../assets/home-top-vec.svg";
import koifish from "./../assets/home-about-section.svg";
import note from "./../assets/musical-note.png";
import book from "./../assets/open-book.png";
import pi from "./../assets/pi-mathematical-constant-symbol.png";
import run from "./../assets/run.png";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div className="page">
                <section>
                    <div className="home-header">Welcome to Asha's website</div>
                    <img className="home-first-vec" src={firstVec} alt="top home vector" />
                </section>
                <section className="home-second-section">
                <h1 id="home-about-me-title">About Me</h1>

                <img className="home-about-fish" src={koifish} alt="Your SVG" />
                    <div className="fish-surrounding-home">
                        <div className="home-surrounding-imgs">
                            <img className="home-imgs" src={book} alt="top home vector" />
                            <p className="home-about-text">Avid reader</p>
                        </div>
                        <div className="home-surrounding-imgs">
                            <img className="home-imgs" src={note} alt="top home vector" />
                            <p className="home-about-text">Singer, songwriter + guitarist</p>
                        </div>

                        <div className="home-surrounding-imgs">
                            <img className="home-imgs" src={pi} alt="top home vector" />
                            <p className="home-about-text">Studying Actuarial Studies + Computer Science</p>
                        </div>

                        <div className="home-surrounding-imgs">
                            <img className="home-imgs" src={run} alt="top home vector" />
                            <p className="home-about-text">Runner and gym rat</p>
                        </div>

                    </div>
                </section>
            </div>
            <Footer />

        </>
    );
}

export default Home;