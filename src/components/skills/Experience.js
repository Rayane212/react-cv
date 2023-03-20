import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3 className='exp'>Expérience</h3>
            <div className="exp1">
                <h4>Développeur Web .NET - Dailybiz</h4>
                <h5>2022-2023</h5>
                <p>Contrat en Alternance :</p>
                <ul>
                    <li><p>Réordonné les pages ainsi que les rendre responsive design</p></li>
                    <li><p>Développement de nouvelle fonctionnalité</p></li>
                    <li><p>Création de nouvelles pages</p></li>
                    <li><p>Développement des requêtes SQL</p></li>
                    <li><p>Correction de Bug</p></li>
                </ul>
            </div>
            <div className="exp2">
                <h4>Développeur Web - Préfecture de Police</h4>
                <h5>Mai-Aout 2022</h5>
                <p>Stagiare</p>
                <ul>
                    <li><p> Développement d'application web en PHP</p></li>
                </ul>
                
            </div>
            <div className="formations">
                <h3 className='formation'>Formation</h3>
                <div className='formation1'>
                    <h4>Licence Concepteur développeur d'application, EPSI Paris</h4>
                    <h5>2022-2023</h5>
                    <ul>
                    <li><p>Utilisation de l'environnement .net</p></li>
                    <li><p>UX Design</p></li>
                    <li><p>Projet JS</p></li>
                   
                </ul>
                </div>
                <div className='formation2'>
                    <h4>DUT Informatique, IUT Orléans</h4>
                    <h5>2020-2022</h5>
                    <p><span><a href='https://www.univ-orleans.fr/fr/iut-orleans/formation/informatique' target='_blank'>www.univ-orleans.fr</a></span></p>
                    <p>Réalisation de projet tutoré en cours d'année :</p>
                    <ul>
                    <li><p>1ére année : conception d'un jeu en 2D</p></li>
                    <li><p>2éme année : explore game</p></li>
                  
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;