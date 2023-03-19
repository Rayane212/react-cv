import React, { Component } from 'react';
import ProgressBar from './ProgressBar'
class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "JavaScript", xp: 1.8 },
            { id: 2, value: "HTML/CSS", xp: 2 },
            { id: 3, value: "Php", xp: 0.4 },
            { id: 4, value: "Python", xp: 0.8 }

        ],
        frameworks: [
            { id: 1, value: "ReactJs", xp: 1.8 },
            { id: 2, value: "Bootstrap", xp: 2 },
            { id: 3, value: "Sass", xp: 0.4 },
            { id: 4, value: "Material UI", xp: 0.8 }
        ]
    }
    render() {
        let { languages, frameworks } = this.state;
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

            </div>
        );
    }
}

export default Languages;