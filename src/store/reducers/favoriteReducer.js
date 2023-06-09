import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants/actionTypes";
import { getLocalStorage } from "../../utils/localStorage";

import { omit } from 'lodash';

const inisialState =  getLocalStorage('store');


const favoriteReducer = ( state = inisialState, action ) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_FAVORITE:
            return omit(state, [action.payload])
        default: 
            return state;
    }
}

export default favoriteReducer;