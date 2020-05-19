import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

import { fetchHeroes } from '../actions/heroesActions'
import { Heroes} from '../components/Heroes'

const HeroesPage = () => {
    const data = useSelector(state => state.heroes);
    useEffect(() => {
        (fetchHeroes())
    }, [])

    const renderHeroes = () => {
        if (data.loading) return <p>Loading posts...</p>
        if (data.hasErrors) return <p>Unable to display posts.</p>
        return data.heroes.map(heroes => <Heroes key={heroes.id} heroes={heroes} />)
    }

    return (
        <section>
            <h1>Heroes</h1>
            {renderHeroes()}
        </section>
    )
}


export default HeroesPage