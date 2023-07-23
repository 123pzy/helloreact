import React, { Component } from 'react'

export default class App extends Component {
    state = {
        num: 1
    }
    render() {
        return (
            <div>
                <div>{this.state.num}</div>
                <button onClick={() => { this.add() }}>点我加一</button>
            </div>
        )
    }
    add() {
        this.setState({
            num: this.state.num + 1
        })
    }
}
