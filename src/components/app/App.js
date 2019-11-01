import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from '../app-header'
import Selector from '../selector'
import Card from '../card'
import './app.css'

class App extends React.Component  {
    state = {
        selectedBeer: null
    }

    changeBeerIdHandler = (e) => {
        this.setState({selectedBeer: e.target.value})
    }

    render () {
        console.log(this.state)
        return (
            <div className="container">
                <AppHeader />

                <div className="d-flex">

                    <div className="app-column">
                        <Selector changeBeer={this.changeBeerIdHandler} />
                        <Card beerIdForCard={this.state.selectedBeer}/>
                    </div>
                    <div className="app-column">
                        <Selector changeBeer={this.changeBeerIdHandler}/>
                        <Card beerIdForCard={this.state.selectedBeer}/>
                    </div>
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