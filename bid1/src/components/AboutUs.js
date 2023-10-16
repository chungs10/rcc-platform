import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="main" id="aboutUsSection">
        <div className="headerContainer">
        <h1>About the RCC</h1>
            <div className="headerSection">
                <h2>What is the RCC</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aenean pharetra magna ac placerat. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tempus quam pellentesque nec nam aliquam sem. Scelerisque purus semper eget duis at tellus at urna. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Nam aliquam sem et tortor consequat id porta nibh. Dolor purus non enim praesent elementum facilisis. Libero nunc consequat interdum varius sit amet. Vulputate odio ut enim blandit. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Eu tincidunt tortor aliquam nulla facilisi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ullamcorper morbi tincidunt ornare massa eget egestas. Platea dictumst quisque sagittis purus sit amet volutpat. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed arcu non odio euismod lacinia at quis.</p>
            </div>
            <div className="headerSection">
                <h2>RCC History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse faucibus interdum posuere lorem ipsum dolor sit. Aenean pharetra magna ac placerat. Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Tempus quam pellentesque nec nam aliquam sem. Scelerisque purus semper eget duis at tellus at urna. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Nam aliquam sem et tortor consequat id porta nibh. Dolor purus non enim praesent elementum facilisis. Libero nunc consequat interdum varius sit amet. Vulputate odio ut enim blandit. Est lorem ipsum dolor sit amet consectetur adipiscing elit. Eu tincidunt tortor aliquam nulla facilisi. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ullamcorper morbi tincidunt ornare massa eget egestas. Platea dictumst quisque sagittis purus sit amet volutpat. Duis at tellus at urna condimentum mattis pellentesque id nibh. Sed arcu non odio euismod lacinia at quis.</p>
            </div>
            <div className="socialHeaderSection">
                <h2>How to Reach Us:</h2>
                <ul className="wrapper">
                    <li className="icon github">
                        <span className="tooltip">GitHub</span>
                        <span className="gitHubSpan"><a href="https://github.com/Benny787" target="_blank"><i id="gitHubIcon" className="fab fa-github"></i></a></span>
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