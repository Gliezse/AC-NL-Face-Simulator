import { combineReducers } from "redux";

import game from "reducers/game";
import preferences from "reducers/preferences";

export default combineReducers({
    game,
    preferences,
});