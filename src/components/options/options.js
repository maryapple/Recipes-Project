import React from 'react'

export default Option = (props) => {
    return (
        <option value={props.id} key={props.id}>{props.name}</option>
    )
}