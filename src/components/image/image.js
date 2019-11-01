import React from 'react'

export default Image = () => {
    return new Promise((resolve, reject) => {
        fetch('https://source.unsplash.com/200x100/?beer')
            .then(res => { console.log(res.url); return (res.url) } )
            .catch( () => reject('../img/3.png'))
    })  
    // return <img src="https://source.unsplash.com/200x100/?beer" className="card-img-top" alt="photo" />
}