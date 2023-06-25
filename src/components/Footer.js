import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <div className="footer-div">
                <div classname="icon-flex">
                    {/* <div id="foot-txt">
                        elo
                    </div> */}
                    <div id="footer-icons">
                        <a a href="https://www.facebook.com/asha.raghav.9822/" target="_blank" ><FacebookRoundedIcon sx={{ color: "white" }}/></a>
                        <a a href="https://www.instagram.com/musicbyasha/?hl=en" target="_blank" ><InstagramIcon  sx={{ color: "white" }}/></a>
                        <a a href="https://www.linkedin.com/in/asha-raghav-a27b86205" target="_blank" ><LinkedInIcon  sx={{ color: "white" }}/></a>
                    </div>
                    {/* Credits: <a href="https://www.flaticon.com/free-icons/books" title="books icons">Books icons created by Freepik - Flaticon</a> 
                    <a href="https://www.flaticon.com/free-icons/music" title="music icons">Music icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/pi" title="Pi icons">Pi icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/run" title="run icons">Run icons created by Freepik - Flaticon</a>
                    */}
                </div>

            </div>
        </>
    );
}

export default Footer;