import React, { Component } from "react";
import UIfx from "uifx";
import select from "assets/sfx/select.mp3"

const selectSound = new UIfx(select, {
    volume: 0.5,
    throttleMs: 100,
}); 

class Answer extends Component {
    handleClick = () => {
        const { value, selectable, selectedAnswerHandler } = this.props
        if (selectable){
            selectSound.play();
            selectedAnswerHandler(value);
        }
    }

    render() {
        const { text, selected, selectable } = this.props;

        console.log(selected)

        return(
            <div className={`answer ${!selectable ? "not-selectable" : ""} ${selected ? "selected" : ""}`} onClick={this.handleClick}>
                <span>{text}</span>
                <div className="underline"/>
            </div>
        )
    }
}

export default Answer;