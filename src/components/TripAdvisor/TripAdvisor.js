import React, {Component} from 'react';
import "./styles/TripAdvisor.scss"

import Info from "./Info";

class TripAdvisor extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id={"TripAdvisor"} className={"TripAdvisor"}>
                <div className="control left" id="control-left">
                    <i className="fas fa-caret-left fa-2x white"/>
                </div>

                <Info/>

                <div className="control right" id="control-right">
                    <i className="fas fa-caret-right fa-2x white"/>
                </div>
            </div>
        );
    }
}

export default TripAdvisor;