import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Rayane Hadi</h1>
                    <h2>Développeur Full-Stack</h2>
                    <div className="pdf">
                        <a href="./media/CV_2023-03-09_Rayane_HADI.pdf" target="_blank" rel="noopener noreferrer">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;