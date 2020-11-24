import React from 'react';
import logo from '../images/nuru.jpg'

const Navbar = (props) =>{
    const theme = props.theme;
    var s = document.getElementById("mySideNav")

    /* Set the width of the side navigation to 300px and back to 0px if equal to 300px */
    function openNav(){
        if(s.style.width==="300px"){
            s.style.width = "0";
        }else{
            s.style.width = "300px";
        }
    }
    /**Set the Side Navbar back to 0px width */
    function closeNav() {
        s.style.width = "0"
    }
    return (
        <div>
            <header>
            <div className="head-wrapper">
                <div className="logo">
                    <div className="img">
                        <a href="/"><img src={logo} alt="Nuru-Deen" /></a>
                    </div>
                    <div className="img-desc">
                        <a href="/">
                            <span className="sp-1">Nuru</span><span className="sp-2">Deen</span>
                        </a>
                    </div>
                </div>
                <div className="menus">
                    <div className="desktop-menus">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#social">Social media</a></li>
                        </ul>
                    </div>
                    <div className="mobile-menus">
                        <div id="mySideNav" className="sidenav">
                            <div href=""
                            // href="javascript:void(0)"
                             className="closebtn" 
                            onClick={closeNav}
                            >&times;</div>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                            <a href="#social">Social media</a>
                        </div>
                    </div>
                    <div className="toggler" 
                            onClick={openNav}
                            >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            <div className="scroll-container">
                <div className="scroll-bar" id="myBar"></div>
            </div>
            </div> 
        </header>
        </div>
    )
}

export default Navbar
