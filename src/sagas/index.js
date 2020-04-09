import game from "sagas/game";
import { all } from "redux-saga/effects"

const sagas = [
    ...game,
]

export default function* rootSaga(){
    yield all(sagas)
};