import React, { Component } from 'react'
import "../components/css/index.css"

function Child() {
    const classObj = {
        backgroundColor: 'blue'
    }
    return (
        <div style={classObj}>
            Child
        </div>
    )
}

export default class App extends Component {
    render() {
        return (
            <div className='active'>{10 + 20}
                <Child></Child>
                
            </div>
        )
    }
}
