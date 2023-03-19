import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Foot</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Crypto-monnaies</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Jeux vidéos</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;