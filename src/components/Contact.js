import React from "react";
import lotus from "./../assets/lotusimg.svg";
import Footer from "./Footer";
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

function Contact() {
    return (
        <>
            <div className="flex-container-contact">
                
                <div>
                    <img src={lotus} alt="top home vector" />
                </div>
                <div className="contact-container">
                    <MailOutlineRoundedIcon /> <p>asha.raghav.hope@gmail.com</p>
                </div>
            </div>
            <div className="modified-foot">
                <Footer />
            </div>
        </>
    );
}

export default Contact;