import React from 'react'
import {Link} from "react-router-dom";

export const Hero = ({ hero }) => (
    <h2>
        <Link to={`/heroes/${hero.id}`} > <h2>{hero.localized_name}</h2> </Link>
    </h2>
)