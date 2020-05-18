import { store } from '../index';
export const GET_HERO = 'GET HERO'
export const GET_HERO_SUCCESS = 'GET_HERO_SUCCESS'
export const GET_HERO_FAILURE = 'GET_HERO_FAILURE'


export const getHero = () => ({
    type: GET_HERO,
})

export const getHeroSuccess = hero => ({
    type: GET_HERO_SUCCESS,
    payload: hero,
})

export const getHeroFailure = () => ({
    type: GET_HERO_FAILURE,
})


export const fetchHero = async() => {
    store.dispatch(getHero())

    try {
        const response = await fetch('https://api.opendota.com/api/heroStats')
        console.log(response)
        const data = await response.json()
        console.log(data)

        store.dispatch(getHeroSuccess(data))
    } catch (error) {
        store.dispatch(getHeroFailure())
    }
}