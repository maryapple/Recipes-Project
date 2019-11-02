import React from 'react'
import './card.css'
import data from '../data'

const Card = (props) => {
    const beer = data.find((beer) => {
        return beer.id === Number(props.beerIdForCard)
    })
    
    return (
        <div className="card alignment-card-block">
            {props.loading ? 'Loading image...' : <img src={props.imageUrl} alt="" />}
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