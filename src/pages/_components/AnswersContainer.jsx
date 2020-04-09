import React, { Component } from "react";
import Answer from "pages/_components/Answer";
import { connect } from "react-redux";
import { selectors, actions } from "reducers/game";

class AnswersContainer extends Component {
    state = {
        selectedAnswer: null,
    }

    optionSelectHandler = (selectedAnswer) => {
        const { selectOption } = this.props;
        this.setState({ selectedAnswer });
        selectOption(selectedAnswer);
    }

    render() {
        const { answers, currentQuestion } = this.props;
        const { selectedAnswer } = this.state; 

        return (
            <div className="answers-container">
                { answers.map( (answer, index) => (
                    <Answer 
                        key={answer.slice(0,1) + index} 
                        value={index} 
                        text={answer} 
                        selected={index === selectedAnswer} 
                        selectable={selectedAnswer === null}
                        selectedAnswerHandler={this.optionSelectHandler}    
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentQuestion: selectors.getCurrentQuestion(state),
})

const mapDispatchToProps = (dispatch) => ({
    selectOption: (optionID) => dispatch(actions.chooseOption(optionID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswersContainer);