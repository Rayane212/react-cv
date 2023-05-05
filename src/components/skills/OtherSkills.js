import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li><FontAwesomeIcon icon={faCheckSquare} />Anglais intermédiaire</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} />GitHub</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} />Méthodes agiles</li>
                </ul>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckSquare} />Figma</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} />UI/UX Design</li>
                    <li><FontAwesomeIcon icon={faCheckSquare} />DevOps</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;
