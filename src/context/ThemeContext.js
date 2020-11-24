import React, { createContext ,Component } from 'react'

export const ThemeContext = createContext();

export class ThemeContextProvider extends Component {
    state = {
        isLightTheme:true,
        light: { textColor: 'black', bg:'white', ui:'white' },
        dark: { textColor: 'white', bg:'#ddd', ui:'#242424' },
        skills:{
            strongFields:['Laravel','Vue','Bootstrap','Javascript'],

            backEnd:['Laravel','php'],

            frontEnd:['HTML','Css','Vue','ReactJs','Javascript','Bootstrap'],

            other:['SQL','Oracle','VB6','Excel']
        }
    }
    toggleTheme = () =>{
        this.setState({isLightTheme : !this.state.isLightTheme})
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}} >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
