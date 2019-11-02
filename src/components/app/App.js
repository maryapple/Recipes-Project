import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from '../app-header'
import Selector from '../selector'
import Card from '../card'
import './app.css'

class App extends React.Component  {
    state = {
        selectedBeer: 2,
        loading: false,
        imageUrl: 'https://source.unsplash.com/200x100/?beer'
    }

    changeBeerIdHandler = (e) => {
        this.setState({ loading: true })
        this.setState({ selectedBeer: e.target.value })
        this.getBeerImage()
    }

    getBeerImage = () => {
        fetch('https://source.unsplash.com/200x100/?beer')
            .then(res => {
                this.setState({
                    imageUrl: res.url,
                    loading: false
                })
            })
    }

    render () {
        // console.log(this.state)
        return (
            <div className="container">
                <AppHeader />
                <div className="app-column">
                    <Selector changeBeer={this.changeBeerIdHandler} />
                    <Card
                        beerIdForCard={this.state.selectedBeer}
                        loading={this.state.loading}
                        imageUrl={this.state.imageUrl} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App