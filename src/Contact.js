import React, { Component } from 'react';
import "./contactUs.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

function Contact(){
        return (
          
<div class="contact">
<div className="content">
			<h2>Contact Us</h2>
            <p>Connect with Us and Give your Suggestions to improve your experience, Report Bugs Or Send us your valuable Feedback.</p>
            </div>
        <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><LocationOnIcon /></div>
                    <div class="text">
                        <h3>Address:</h3>
                        <p>Chandigarh University, Near Gharuan Village, Ludhiana Highway, Mohali, Punjab</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><PhoneIcon /></div>
                    <div class="text">
                        <h3>Phone:</h3>
                        <p>+91 87263 87362</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><EmailIcon /></div>
                    <div class="text">
                        <h3>Email:</h3>
                        <p>UnicornMusic@gmail.com</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><PublicIcon /></div>
                    <div class="text">
                        <h3>Website:</h3>
                        <p>Unicorn.in</p>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Subject</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required" />
                        <span>Message</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name="" value="Send" />
                    </div>
                
            </div>
        </div>
        </div>

        /* <section class="newsletter">
            <br />
            <br />
            <br />
            <h3>Subscribe for getting Latest hits, weekly chart topper Songs and much more!</h3>
        
            <form action="">
                <input class="box" type="email" placeholder="Enter your e-mail" />
                <input type="submit" value="Subscribe" class="btnn" />
            </form> */
        );
    }


export default Contact;