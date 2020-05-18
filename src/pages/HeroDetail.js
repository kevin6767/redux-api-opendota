import React, {useEffect , useState} from 'react'
import { fetchHero } from '../actions/heroAction'
import {useParams} from "react-router";
import {HeroSummary} from '../components/HeroSummary'
import {useSelector} from "react-redux";
import {Hero} from "../components/Hero";

const HeroDetail = () => {
    const data = useSelector(state => state.hero);
    const heroId = useParams()
    useEffect(() => {
        (fetchHero())
    }, [])


        const renderHero = () => {
            if (data.loading) return <p>Loading posts...</p>
            if (data.hasErrors) return <p>Unable to display posts.</p>
            return data.heroes.map(hero => <Hero key={hero.id} hero={hero}/>)
        }
    return(
        <div>
            {renderHero()}
        </div>
    )
}



export default HeroDetail