import React from 'react'
import {Link} from "react-router-dom";

export const Heroes = ({ heroes }) => (
    <h2>
        <Link to={`/heroes/${heroes.id}`} > <h2>{heroes.localized_name}</h2> </Link>
    </h2>
)