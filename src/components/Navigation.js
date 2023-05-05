import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMountain, faImages, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/profile.jpg" style={{ width: 150 + 'px', height: 150 + 'px' }} alt="profile" />
                    <h3>Rayane</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <FontAwesomeIcon icon={faHome} />
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" activeClassName="navActive">
                            <FontAwesomeIcon icon={faMountain} />
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" activeClassName="navActive">
                            <FontAwesomeIcon icon={faImages} />
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="navActive">
                            <FontAwesomeIcon icon={faAddressBook} />
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/rayane-h-b6348725a/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Rayane212" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faCodepen} /></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Rayane - 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
