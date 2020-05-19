import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'

import { fetchHero } from '../actions/heroAction'
import { Hero } from '../components/Hero'
import {useParams} from "react-router";

const HeroPage = () => {
    let content;
    const data = useSelector(state => state.hero);
    const {heroId} = useParams()

    useEffect(() => {
        (fetchHero({heroId}))
    }, [heroId])


    if (data.loading) content = <p>Loading posts...</p>;
    else if (data.hasErrors) content = <p>Unable to display posts</p>
    else {
        const hero = data.hero.find(hero => hero.id === +heroId)
        if (hero) {
            content = <Hero key={hero.id} hero={hero}/>
        }
    }


    return (
        <section>
            <h1>Hero</h1>
            {content}
        </section>
    )

}









    /*const renderHero = () => {
        if (data.loading) return <p>Loading posts...</p>
        if (data.hasErrors) return <p>Unable to display posts.</p>
        data.hero.find(hero => { console.log(hero, heroId); return hero.id === heroId ?
        <Hero key={hero.id} hero={hero} /> : null })
    }

    return (
        <section>
            <h1>Hero</h1>
            {renderHero()}
        </section>
    )
}
*/

export default HeroPage