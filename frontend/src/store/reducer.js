import { combineReducers } from 'redux';
import movieReducer from './movieSlice';

const rootReducer = combineReducers({
    movie: movieReducer,
});

export default rootReducer;
