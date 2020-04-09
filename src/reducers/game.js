export const types = {
    CHOOSE_OPTION: "game/CHOOSE_OPTION",
}

const INITIAL_STATE = {
    currentQuestion: 0,
}

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case types.CHOOSE_OPTION:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
            }
        default:
            return state;
    }
}

export const actions = {
    chooseOption: (optionIndex) => ({
        type: types.CHOOSE_OPTION,
        optionIndex,
    })
}

export const selectors = {
    getCurrentQuestion: ({ game }) => game.currentQuestion, 
}