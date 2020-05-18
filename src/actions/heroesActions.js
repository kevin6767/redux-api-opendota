import { store } from '../index';
export const GET_HEROES = 'GET HEROES'
export const GET_HEROES_SUCCESS = 'GET_HEROES_SUCCESS'
export const GET_HEROES_FAILURE = 'GET_HEROES_FAILURE'


export const getHeroes = () => ({
type: GET_HEROES,
})

export const getHeroesSuccess = heroes => ({
type: GET_HEROES_SUCCESS,
payload: heroes,
})

export const getHeroesFailure = () => ({
type: GET_HEROES_FAILURE,
})


export const fetchHeroes = async() => {
store.dispatch(getHeroes())

try {
const response = await fetch('https://api.opendota.com/api/heroStats')
console.log(response)
const data = await response.json()
console.log(data)

store.dispatch(getHeroesSuccess(data))
} catch (error) {
store.dispatch(getHeroesFailure())
}
}