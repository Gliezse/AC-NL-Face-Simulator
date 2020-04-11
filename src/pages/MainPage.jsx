import React, { Component } from "react";
import AnswersContainer from "pages/_components/AnswersContainer";
import { connect } from "react-redux";
import { actions as gameActions, selectors as gameSelectors } from "reducers/game";

class MainPage extends Component {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    render() {
        const { currentQuestion } = this.props;
        const { answers, question } = currentQuestion;

        return (
            <div className="main-page">
                {question && <div className="question">
                    <span>{question}</span>
                </div> }
                {answers && <AnswersContainer answers={answers} />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: gameSelectors.getCurrentQuestion(state),
})

const mapDispatchToProps = (dispatch) => ({
    init: () => dispatch(gameActions.init()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);