
import { combineReducers } from 'redux'
import {AnventoryReducer} from './AnvantoryReducer';
export default combineReducers({
    anventoryList: AnventoryReducer,
});