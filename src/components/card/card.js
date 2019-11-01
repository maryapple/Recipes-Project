import React from 'react'
import './card.css'
import data from '../data'
import Image from '../image'

const Card = (props) => {
    const beer = data.find((beer) => {
        return beer.id === Number(props.beerIdForCard)
    })
    // console.log(beer.name)
    return (
        <div className="card alignment-card-block">
            {/* <img src="https://source.unsplash.com/200x100/?beer" className="card-img-top" alt="photo" /> */}
            {/* <Image /> */}
            <img src={Image()}></img>
            <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p className="card-text">
                    <span className="card-info">
                        The phone: 
                    </span>
                    {beer.phone}
                </p>
                <p className="card-text">
                    <span className="card-info">
                        The postal code: 
                    </span>
                    {beer.postal_code}
                </p>
                <p className="card-text">
                    <span className="card-info">
                        The beer state: 
                    </span>
                    {beer.state}
                </p>
                <p className="card-text">
                    <span className="card-info">
                        The website: 
                    </span>
                    {beer.website_url}
                </p>
                <a href="beer.website_url" className="btn btn-primary">Go to website</a>
            </div>
        </div>
    )
}

export default Card