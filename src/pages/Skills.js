import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/skills/Experience';
import Hobbies from '../components/skills/Hobbies';
import Languages from '../components/skills/Languages';
import OtherSkills from '../components/skills/OtherSkills';


const Skills = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Skills;