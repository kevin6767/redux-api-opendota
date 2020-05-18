import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => (
    <section>
        <h1>Main</h1>
        <p>This is the central page</p>

        <Link to="/heroes" className="button">
            View Heroes
        </Link>
    </section>
)

export default Main