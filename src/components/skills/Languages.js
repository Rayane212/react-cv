import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "JavaScript", xp: 1.8 },
            { id: 2, value: "HTML/CSS", xp: 2 },
            { id: 3, value: "Php", xp: 0.4 },
            { id: 5, value: ".NET Core", xp: 0.8 },
            { id: 6, value: "C/C++", xp: 0.8 },
            { id: 7, value: "Java", xp: 0.8 }
        ],
        frameworks: [
            { id: 1, value: "ReactJs", xp: 1.8 },
            { id: 2, value: "Bootstrap", xp: 2 },
            { id: 3, value: "Sass", xp: 0.4 },
        ],
        database :[
            { id: 1, value: "SQL Server", xp: 0.8 },
            { id: 2, value: "MySQL", xp: 0.8 }        
        ],
        foreignLanguages:[
            { id: 1, value: "English", xp: 0.8 },
            { id: 2, value: "French", xp: 0.8 }

        ]
    }
    render() {
        let { languages, frameworks, database, foreignLanguages } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks & Library"
                />
                 <ProgressBar
                    languages={database}
                    className="databaseDisplay"
                    title="Database"
                />
                <ProgressBar
                    languages={foreignLanguages}
                    className="foreignLanguagesDisplay"
                    title="Foreign Languages"
                />

            </div>
        );
    }
}

export default Languages;