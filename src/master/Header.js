import React from "react"

import './Header.css';

//How To Headers and more - https://www.w3schools.com/howto/default.asp

function Header() {
    return (
        //HEADER 1, RESPONSIVE - https://www.w3schools.com/howto/howto_css_responsive_header.asp
        // <div>
        //     <div class="header">
        //         <a href="#default" class="logo">Dev Launchers: Base Camp</a>
        //         <div class="header-right">
        //             <a class="active" href="#home">Home</a>
        //             <a href="#contact">Contact</a>
        //             <a href="#about">About</a>
        //         </div>
        //     </div>
        // </div>

        //HEADER 2, RESPONSIVE TOPNAV - https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
        <div>
            <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
            </div>
        </div>
    )
}

export default Header