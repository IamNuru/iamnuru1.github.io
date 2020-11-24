import React from 'react'
import img1 from '../images/skill.png';
import img2 from '../images/100.png'

const Skills = (props) => {
    const theme = props.theme;
    const skills = props.skills;
    let bgImage = theme.ui==='white' ? `url(${img1})` : `url(${img2})`;
            return(
                <div className="skills-body" 
                style={{backgroundImage:bgImage,color:theme.textColor}}>
                    <fieldset>
                        <legend>Skills</legend>
                        <div className="content">
                            <ul>
                                <strong>Strong Fields</strong>
                                {
                                    skills.strongFields.map((skill)=>
                                    <li key={skill.index}>{skill}</li>
                                    )
                                }
                            </ul>
                            <ul>
                                <strong>Back-end Skills:</strong>
                                {
                                    skills.backEnd.map((skill)=>
                                    <li key={skill.index}>{skill}</li>
                                    )
                                }
                            </ul>
                            <ul>
                                <strong>Front-end Skills:</strong>
                                {
                                    skills.frontEnd.map((skill)=>
                                    <li key={skill.index}>{skill}</li>
                                    )
                                }
                            </ul>
                            <ul>
                                <strong>Other Skills:</strong>
                                <li>Proficient in Ms Excel, Ms Word and PowerPoint Presentation.</li>
                                <li>Visual Basic 6.0</li>
                                <li>Proficient in MySql, Access and Oracle database.</li>
                            </ul>
                        </div>
                    </fieldset>
                </div>
    )
}

export default Skills;
