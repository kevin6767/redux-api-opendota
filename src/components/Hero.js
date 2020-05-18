import React from 'react'

export const Hero = ({ hero }) => (
    <article className="hero-excerpt">
        <h2>{hero.localized_name}</h2>
        <p>{hero.move_speed}</p>
    </article>
)