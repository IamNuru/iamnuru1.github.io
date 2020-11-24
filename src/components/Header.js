import React from 'react'

const Header= (props) => {
    const theme = props.theme
    const btn = {
        fontWeight:600,
        height:'50px',
        width:'40%',
        marginLeft:'30%',
        fontSize:'24px',
        paddingTop:'5px',
        borderRadius:'0.2rem'
    }
    const btnHire={
        color:'red',
        background:'lightBlue',
        boxShadow: '0 8px 16px 0 rgba(250,250,250,0.2), 0 6px 20px 0 rgba(250,250,250,0.19)',
    }
    const btnProjects={
        color:'green',
        background:'aliceBlue',
        boxShadow: '0 8px 16px 0 rgba(250,250,250,0.2), 0 6px 20px 0 rgba(250,250,250,0.19)',
    }
    const wrapBtns ={
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr)',
        gridGap:'1em'
    }
    function commingSoon(){
        alert('Page Comming Soon')
    }

    let bgColor = theme.ui==='white' ? 'rgb(138, 135, 135)' : 'black';
    return (
        <article className="wrap-shimmer">
            <div className="bg-photo">
                <div className="on-photo" 
                style={{backgroundColor:bgColor}}>
                    <h2 className="shimmer name">ABDULAI NURU-DEEN</h2>
                    <h3 className="shimmer dev" style={{fontFamily:'Trebuchet Ms'}}>WEB DEVELOPER</h3>
                    <div className="biography">
                        <p style={{color:theme.textColor}}>
                            I am an intermediate full stack web developer with over 2
                                years experience. You can
                            email me via the handle 
                        </p>
                    </div>
                    <div style={wrapBtns}>
                        <div style={{...btn, ...btnHire}} onClick={commingSoon} 
                            className="hover-pointer" data-aos="fade-up-right">
                            <div></div>
                        <div>Hire Me</div>
                        </div>
                        <div style={{...btn, ...btnProjects}} onClick={commingSoon}
                            className="hover-pointer" data-aos="fade-up-left">
                            <div></div>
                            <div>My works</div>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </article>
    )

    
}

export default Header
