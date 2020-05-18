import * as actions from '../actions/heroesActions'

export const initialState = {
    heroes: [],
    loading: false,
    hasErrors: false,
}

export default function heroesReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_HEROES:
            return { ...state, loading: true }
        case actions.GET_HEROES_SUCCESS:
            return { posts: action.payload, loading: false, hasErrors: false }
        case actions.GET_HEROES_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}