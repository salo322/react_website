import React from 'react'

function Contact() {
    return (
        <div>
        <div className="contacts">
            <h1 className="title-contacts">CONTACT US</h1>
            <div className="contacts-container">
                <div className="container-first">
                    <div className="contacts-container-first">
                        <div className="phone">
                            <img src="https://img.icons8.com/metro/50/ffffff/phone-disconnected.png"/>
                            <p>+995557577795</p>
                        </div>
                        <div className="gmail">
                            <img src="https://img.icons8.com/material-outlined/24/ffffff/gmail-login.png"/>
                            <p>example@gmail.com</p>
                        </div>
                        <div className="location">
                            <img src="https://img.icons8.com/metro/100/ffffff/worldwide-location.png"/>    
                            <p>Tbilisi, Georgia</p>
                        </div>
                    </div>
                </div>
                <div className="container-second">
                    <div className="inside-container">
                        <div className="contact-inputs">
                     <input type="text" placeholder="Name"/>
                     <input type="text" placeholder="Email"/>
                        </div>
                        <div className="subject">
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="message">
                             <input type="text" placeholder="Message" />
                        </div>
                        <div className="contacts-button">
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact
