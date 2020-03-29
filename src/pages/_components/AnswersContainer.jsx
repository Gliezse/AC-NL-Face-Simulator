import React, { Component } from "react";
import Answer from "pages/_components/Answer";

class AnswersContainer extends Component {
    state = {
        selectedAnswer: null,
    }

    optionSelectHandler = (selectedAnswer) => {
        this.setState({ selectedAnswer });
    }

    render() {
        const { answers } = this.props;
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

export default AnswersContainer;