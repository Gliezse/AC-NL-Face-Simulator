import { takeLatest, put, select, delay } from "redux-saga/effects";
import { types, selectors, actions } from "reducers/game";
import { selectors as preferencesSelectors } from "reducers/preferences";
import { getQuestionsGroup, getQuestionsGroupByAnswerId } from "util/questions";
import * as constants from "content/constants";

const sagas = [
    takeLatest(types.INIT_QUESTIONS, initQuestions),
    takeLatest(types.CHOOSE_OPTION, chooseOption)
]

export default sagas;

function* initQuestions() {
    const lang = yield select(preferencesSelectors.getSelectedLang);
    const question = getQuestionsGroup(constants.QUESTIONS_GROUP_INITIAL, lang);
    yield put(actions.setQuestions(question))
}

function* chooseOption({optionID}) {
    const lang = yield select(preferencesSelectors.getSelectedLang);
    const question = getQuestionsGroupByAnswerId(optionID, lang)
    yield delay(1000)
    yield put(actions.setQuestions(question));
}