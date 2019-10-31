
import React from 'react'
import ReactDOM from 'react-dom'
import AppHeader from '../app-header'
import './app.css'

const App = () => {
    return (
        <div className="todo-app">
            <AppHeader />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App