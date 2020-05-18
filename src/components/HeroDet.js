import React from 'react'
import {Link} from "react-router-dom";

export const HeroDet = ({ HeroDet }) => (
    <article className="hero-excerpt">
        <Link to="/heroes/:heroId" > <h2>{HeroDet.localized_name}</h2> </Link>
        <p>{HeroDet.move_speed}</p>
    </article>
)