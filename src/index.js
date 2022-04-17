// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
// Create a reat component


// Take the react component and show it on the screen

const App = () => {
    const buttonText = { text:'click meee' }

    return (
        <div>
            <label className="label" htmlFor="name" > Enter Something:</label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}> {buttonText.text} </button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)