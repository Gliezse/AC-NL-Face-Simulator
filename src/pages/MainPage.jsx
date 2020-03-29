import React, { Component } from "react";
import AnswersContainer from "pages/_components/AnswersContainer";

class MainPage extends Component {
    render() {
        const answers = [
            "Yep! Here!",
            "No.",
        ]

        return (
            <div className="main-page">
                <AnswersContainer answers={answers} />
            </div>
        )
    }
}

export default MainPage;