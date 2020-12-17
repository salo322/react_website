import React from 'react';
import team1 from './imgs/team1.jpg';
import team2 from './imgs/team2.jpg';
import team3 from './imgs/team3.jpg';
import team4 from './imgs/team4.jpg';

function About() {
    return (
        <div id="about">
            <div className="about-main-container">
                <div className="about-container">
                    <div className="titles-about-container">
                    <h1 className="about-title">ABOUT US</h1> 
                    <p>This is our team, senior, junior and middle web developers</p>
                    </div>
                    
                    <div className="about-images">
                        <div className="about-card">
                        <img className="image-about" width="30%" src={team1} />
                        <div className="inside-image-about">Junior Web Developer</div>
                        </div>
                        <div className="about-card">
                        <img className="image-about" width="30%" src={team2} />
                        <div className="inside-image-about">Senior web developer</div>
                        </div>
                        <div className="about-card">
                        <img className="image-about" width="30%" src={team3} />
                        <div className="inside-image-about">Middle Web Developer</div>
                        </div>
                        <div className="about-card">
                        <img className="image-about" width="30%" src={team4} />
                        <div className="inside-image-about">junior Web Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
