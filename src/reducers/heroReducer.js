import * as actions from '../actions/heroAction'

export const initialState = {
    hero: [],
    loading: false,
    hasErrors: false,
}

export default function heroReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_HERO:
            return { ...state, loading: true }
        case actions.GET_HERO_SUCCESS:
            return { hero: action.payload, loading: false, hasErrors: false }
        case actions.GET_HERO_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}