import React, {useEffect} from 'react';
import Skills from './Skills';
import About from './About';
import EmailForm from './EmailForm';
import Header from './Header';
import AOS from 'aos';
import "aos/dist/aos.css"
// import {ThemeContext}  from '../context/ThemeContext';



const AppBody = (props) => {
    useEffect(() => {
        AOS.init({
            once:true
        });
      }, []);
      
    
    const { isLightTheme , light , dark, skills } = props.cont;
    const theme = isLightTheme ? light : dark;

    return (
        <section className="sect-wrap" id="home"
            style={{backgroundColor:theme.ui, color:theme.textColor,paddingBottom:'10px'}}>
            <Header theme={theme}/>

            <article id="about" data-aos="flip-up">
                <About />
            </article>

            <article id="skills" data-aos="fade-right">
                <Skills theme={theme} skills={skills}/>
            </article>

            <article className="contact" id="contact"  data-aos="fade-left">
                <EmailForm />
            </article>
        </section>  
    );
}

export default AppBody;
