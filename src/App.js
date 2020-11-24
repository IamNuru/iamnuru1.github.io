import React from 'react';
import Navbar from './components/Navbar';
import AppBody from './components/AppBody';
import Footer from './components/Footer';
import './App.css';
import ThemeContextProvider from './context/ThemeContext';
import {ThemeContext}  from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';

const { useEffect } = React

const App = ({ hideLoader  }) =>{
  useEffect(hideLoader, []);
  return (
    <div className="container">
      <ThemeContextProvider>
      <ThemeContext.Consumer>{(context)=>{
        const { isLightTheme , light , dark, skills } = context;
        const theme = isLightTheme ? light : dark;
        return(
          <div>
            <Navbar theme={theme}/>
            <AppBody cont={context}/>
            <ToggleTheme theme={theme}/>
            <Footer />
          </div>
          )
      }}</ThemeContext.Consumer>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
