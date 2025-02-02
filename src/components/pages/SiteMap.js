import React from "react";
import { Link } from "react-router-dom";

const SiteMap = () => {
    return(
        <div id="Page" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>Site Map</h1>
            </div>

            {/* About */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>About</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <Link to="/about">DJR</Link>
                        <Link to="/about/mystory">My Story</Link>
                        <Link to="/about#personalInterestsSection">Personal Interest</Link>
                    </div>
                    <div className="site-map-2">

                    </div>
                    <div className="site-map-3">

                    </div>
                </div>
            </div>

            {/* Projects */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Projects</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <div className="site-map-subtitle">Software Development</div>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_jGUHtmMZ8LVgS5NuV-ruq">Derivative/Hedge Trading</a>
                        <Link className="site-map-link" to="/projects#writingSection">Literary Works</Link>
                        <br></br>
                        <div className="site-map-subtitle">Websites</div>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-0">Personal Website</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-1">Trading View Strategies</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-2">Health Hive</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-3">Car Haven</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-4">Dal-Recipe</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-5">The Sweet Spot</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-6">Fitness Trackr</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-7">Juicebox</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-8">Stranger's Things</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-9">Hacker's News</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-10">Puppy Bowl</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-11">Connect 4</a></Link>
                        <Link className="site-map-link" to="/projects/websites"><a href="#project-12">Real Estate Clicker</a></Link>
                    </div>

                    <div className="site-map-2">
                        <div className="site-map-subtitle">Books</div>
                        <p>Circuit Breakers: One</p>
                        <br></br>
                        <div className="site-map-subtitle">YouTube</div>
                        <a className="site-map-link" href="https://www.youtube.com/@AGNDJ" target="_blank" rel="noopener noreferrer">AGNDJ</a>
                        <a className="site-map-link" href="https://www.youtube.com/@AGNDJGaming" target="_blank" rel="noopener noreferrer">AGNDJ: Gaming</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_9q-Ocgh7_m-9QLrnJjA3j" target="_blank" rel="noopener noreferrer">Behind The Lens</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo-s2GiQvdE-sP7f0KiTalxo" target="_blank" rel="noopener noreferrer">Guided By Grace</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_3NaPoonFVRHQuw2kcK2e3" target="_blank" rel="noopener noreferrer">Life Upgraded</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo9ul0ZoPWf9yBL6sdF8KaB_" target="_blank" rel="noopener noreferrer">Music Spaces</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_V8e2esmRO7J6JcFCvOpkP" target="_blank" rel="noopener noreferrer">Reflections and Revelations</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo-24k9y15pYjlWKvOIWgurs" target="_blank" rel="noopener noreferrer">The Dreamer's Desk</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo9DrUCRrG5qR4E8tuOjNjsg" target="_blank" rel="noopener noreferrer">Tech Savvy</a>
                        <a className="site-map-link" href="https://www.youtube.com/playlist?list=PLKczMAL9dQo_jGUHtmMZ8LVgS5NuV-ruq" target="_blank" rel="noopener noreferrer">Trading Markets</a>
                    </div>
                    
                    <div className="site-map-3">
                        <div className="site-map-subtitle">Journals</div>
                        <p><a className="site-map-link" href="/jtwo">A Busy Week</a></p>
                        <p><a className="site-map-link" href="/jfive">Digital Harmony</a></p>
                        <p><a className="site-map-link" href="/jsix">Evidence of Light</a></p>
                        <p><a className="site-map-link" href="/jfour">Love's Purpose</a></p>
                        <p><a className="site-map-link" href="/jthree">New Aged Branding</a></p>
                        <p><a className="site-map-link" href="/jone">The Tunnel</a></p>
                    </div>
                </div>
            </div>

            {/* Ventures */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Ventures</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <p><a className="site-map-link" href="/ventures/business">Business</a></p>
                        <p><a className="site-map-link" href="/ventures">Purpose</a></p>
                        <p><a className="site-map-link" href="/ventures/realestate">Real Estate</a></p>
                    </div>
                    <div className="site-map-2">

                    </div>
                    <div className="site-map-3">

                    </div>
                </div>
            </div>

            {/* Credentials */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Credentials</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <div className="site-map-subtitle">Curriculum Vitae</div>
                        <p><a className="site-map-link" href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=1" download>Download CV</a></p>
                        <p><a className="site-map-link" href="https://www.dropbox.com/s/pdwtfs8ymntvl1s/DJR-Curriculum%20Vitae.docx-2.pdf?dl=0">View CV</a></p>
                    </div>
                    <div className="site-map-2">
                        <div className="site-map-subtitle">Resume</div>
                        <p><a className="site-map-link" href="https://www.dropbox.com/s/wmp2n32alyvm7jc/DJR-Resume-2023-4.pdf?dl=1" download>Download Resume</a></p>
                        <p><a className="site-map-link" href="https://www.dropbox.com/s/wmp2n32alyvm7jc/DJR-Resume-2023-4.pdf?dl=0">View Resume</a></p>
                    </div>
                    <div className="site-map-3">
                        <div className="site-map-subtitle">Certifications</div>
                        <p><a className="site-map-link" href="https://www.dropbox.com/sh/tqxl9vgpobnnvso/AAD_nK8q8oY3e0a0IH-dZIHca?dl=0">View Certifications</a></p>
                        <br></br>
                        <div className="site-map-subtitle">Notoriety</div>
                        <p><a className="site-map-link" href="https://example.com/view-notoriety">View Notoriety</a></p> {/* Update When there is a weblink */}
                    </div>
                </div>
            </div>
            
            {/* Connect */}
            <div id="site-map-block">
                <div className="site-map-title">
                    <h2>Connect</h2>
                </div>
                <div className="site-map-container">
                    <div className="site-map-1">
                        <div className="site-map-subtitle">Social Media</div>
                        <p><a className="site-map-link" href="https://github.com/AGuyNamedDJ">Github</a></p>
                        <p><a className="site-map-link" href="https://www.instagram.com/aguynameddj/">Instagram</a></p>
                        <p><a className="site-map-link" href="https://www.linkedin.com/in/dalronjrobertson/">Linkedin</a></p>
                        <p><a className="site-map-link" href="https://www.threads.net/@aguynameddj">Threads</a></p>
                        <p><a className="site-map-link" href="https://twitter.com/AGuyNamedDJ_">Twitter</a></p>
                        <p><a className="site-map-link" href="https://youtube.com/@AGNDJGaming">Youtube: Gaming Channel</a></p>
                        <p><a className="site-map-link" href="https://www.youtube.com/@AGNDJ">Youtube: Main Channel</a></p>
                    </div>
                    <div className="site-map-2">
                        <div className="site-map-subtitle">Contact</div>
                        <p><a className="site-map-link" href="/connect#meetingSection">Schedule a Meeting</a></p>
                        <p><a className="site-map-link" href="/connect#email-section">Contact Me</a></p>
                    </div>
                    <div className="site-map-3">

                    </div>
                </div>
            </div>





        </div>
    )
};

export default SiteMap;