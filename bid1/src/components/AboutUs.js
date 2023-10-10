import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About the RCC</h1>
            <div className="headerSection">
                <h2>What is the RCC</h2>
                <p>Fill in Data Here</p>
            </div>
            <div className="headerSection">
                <h2>RCC History</h2>
                <p>Fill in Data Here</p>
            </div>
            <div className="socialHeaderSection">
                <h2>How to Reach Us:</h2>
                <ul className="wrapper">
                    <li className="icon github">
                        <span className="tooltip">GitHub</span>
                        <span className="gitHubSpan"><a href="https://github.com/Benny787/Taplen" target="_blank"><i id="gitHubIcon" className="fab fa-github"></i></a></span>
                    </li>
                    <li className="icon discord">
                        <span className="tooltip">Discord</span>
                        <span><i className="fab fa-discord"></i></span>
                    </li>
                    <li className="icon twitter">
                        <span className="tooltip">Twitter</span>
                        <span><i className="fab fa-twitter"></i></span>
                    </li>
                    <li className="icon instagram">
                        <span className="tooltip">Instagram</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>
                    {/* <li className="icon facebook">
                        <span className="tooltip">Facebook</span>
                        <span><i className="fab fa-facebook-f"></i></span>
                    </li> */}
                </ul>
            </div>
            <a id="heroSectionLink" href="#">Back to Top</a>
        </div>
    </section>
  );
}

export default AboutUs;