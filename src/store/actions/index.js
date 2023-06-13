import { ADD_FAVORITE, REMOVE_FAVORITE } from "../constants/actionTypes";

export const setFavorite = person => ({
    type: ADD_FAVORITE,
    payload: person
});
export const removeFavorite = personId => ({
    type: REMOVE_FAVORITE,
    payload: personId
});

