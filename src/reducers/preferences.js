export const types = {
    CHANGE_LANG: "preferences/CHANGE_LANG",
}

const INITIAL_STATE = {
    lang: "en",
}

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.CHANGE_LANG:
            return {
                ...state,
                lang: action.lang,
            }
        default:
            return state;
    }
}
export const selectors = {
    getSelectedLang: ({ preferences }) => preferences.lang,
}