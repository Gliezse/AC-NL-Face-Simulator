import { takeLatest, put } from "redux-saga/effects";
import { types } from "reducers/game";

const sagas = [
    takeLatest(types.CHOOSE_OPTION, chooseOption)
]

export default sagas;

function* chooseOption({optionID}) {
    console.log("nazi", optionID);
}