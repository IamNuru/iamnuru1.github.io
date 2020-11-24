import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class ToggleTheme extends Component {
    static contextType = ThemeContext

    
    render() {
        
        const {toggleTheme} = this.context
        const theme = this.props.theme
        const styleToggle ={
            position:'fixed',
            minHeight:'70px',
            background:'red',
            borderRadius:'3px',
            top:'40px',
            right:'1px',
            display:'grid',
            gridTemplateRows:'1fr',
            gridGap:'1.5px',
            padding:'2px',
            textAlign:'center',
            zIndex:10000,
        }
        const toggle = {
            height:'35px',
            width:'35px',
            borderRadius:'1px',
            padding:'3px 2px 2px',
            fontSize:'30px',
        }
        const darkMode = {
            background:'black'
        }
        const lightMode = {
            background:'#fff'
        }
        return (
            <div style={styleToggle}>
                <div 
                style={{background:theme.ui === 'white' ? 'white':'black'}}></div>
                <div onClick={toggleTheme} style={toggle} className="switchBtn">&#127762;</div>
            </div>
        )
    }
}

export default ToggleTheme
