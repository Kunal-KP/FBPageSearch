import {combineReducers} from 'redux';
import PageReducer from './page-reducer';
import ShowFavReducer from './show-fav-reducer'

var allReducers = combineReducers ({
    pageList: PageReducer,
    favList: ShowFavReducer
});

export default allReducers;