import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons'

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <FontAwesomeIcon icon={faRunning} />
                    <span>Foot</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faRunning} />
                    <span>Crypto-monnaies</span>
                </li>
                <li className="hobby">
                    <FontAwesomeIcon icon={faRunning} />
                    <span>Jeux vidéos</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;