import React, { Component } from "react";
import Answer from "pages/_components/Answer";
import { connect } from "react-redux";
import { actions } from "reducers/game";

class AnswersContainer extends Component {
    state = {
        selectedAnswer: null,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.answers !== this.props.answers){
            this.setState({ selectedAnswer: null })
        }
    }

    optionSelectHandler = (selectedAnswer) => {
        const { selectOption } = this.props;
        this.setState({ selectedAnswer });
        selectOption(selectedAnswer);
    }

    render() {
        const { answers } = this.props;
        const { selectedAnswer } = this.state; 
        console.log(answers)

        return (
            <div className="answers-container">
                { answers.map( ({id, value}, index) => (
                    <Answer 
                        key={id} 
                        value={id} 
                        text={value} 
                        selected={id === selectedAnswer} 
                        selectable={selectedAnswer === null}
                        selectedAnswerHandler={this.optionSelectHandler}    
                    />
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectOption: (optionID) => dispatch(actions.chooseOption(optionID)),
})

export default connect(null, mapDispatchToProps)(AnswersContainer);