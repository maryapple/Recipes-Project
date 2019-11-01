import React from 'react'
import './card.css'
import data from '../data'

const Card = (props) => {
    const beer = data.find((beer) => {
        return beer.id == props.beerIdForCard
    })
    console.log(beer)
    return (
        <div className="card col-sm-10 alignment-card-block">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>
    )
}

export default Card