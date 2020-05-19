import React from 'react'
import Card from "react-bootstrap/Card";
export const Hero = ({ hero }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://api.opendota.com${hero.img}`} />
        <Card.Body>
            <Card.Title>{hero.localized_name}</Card.Title>
            <Card.Text>
                {hero.move_speed}
            </Card.Text>

        </Card.Body>
    </Card>

)

//<img src={`https://api.opendota.com${hero.img}`}>