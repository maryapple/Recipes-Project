import React from 'react'
import './selector.css'
import data from '../data'
import Option from '../options'

const Selector = (props) => {

    const arr = data.map((elem) => {
        return (
            <Option {...elem} />
        )
    })

    return (
        <div className="select-style">
            <select 
            className="custom-select"
            onChange={props.changeBeer}
            >
                <option>
                    Select the beer
                </option>
                {arr}
            </select>
        </div>
    )
}

export default Selector