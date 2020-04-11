export const types = {
    INIT_QUESTIONS: "game/INIT_QUESTIONS",
    SET_QUESTION: "game/SET_QUESTIONS",
    CHOOSE_OPTION: "game/CHOOSE_OPTION",
}

const INITIAL_STATE = {
    question: {},
}

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case types.SET_QUESTION:
            return {
                ...state,
                question: action.question,
            }
        case types.CHOOSE_OPTION:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export const actions = {
    init: () => ({
        type: types.INIT_QUESTIONS,
    }),
    setQuestions: (question) => ({
        type: types.SET_QUESTION,
        question,
    }),
    chooseOption: (optionID) => ({
        type: types.CHOOSE_OPTION,
        optionID,
    })
}

export const selectors = {
    getCurrentQuestion: ({ game }) => game.question, 
}