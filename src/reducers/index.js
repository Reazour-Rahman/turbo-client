
import changeTheNumber from "./upDown";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
    // This is root reducer. Just create reducer file and import here
        changeTheNumber
    }
);

export default reducers;