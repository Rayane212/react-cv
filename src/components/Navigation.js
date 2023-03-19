import React from 'react';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to="/" className={window.location.pathname === "/" ? "navActive" : ""}>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={window.location.pathname === "/skills" ? "navActive" : ""}>
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio" className={window.location.pathname === "/portfolio" ? "navActive" : ""}>
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/contact" className={window.location.pathname === "/contact" ? "navActive" : ""}>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/rayane-hadi-b6348725a/" target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/Rayane212" target="_blank" rel='noopener noreferrer'><i className="fab fa-github" /></a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel='noopener noreferrer'><i className='fab fa-codepen' /></a>
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