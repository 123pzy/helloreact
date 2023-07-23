import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
    divRef = React.createRef()
    render() {
        return (
            <div>
                <div ref={this.divRef}>{this.state.count}</div>
                <button onClick={this.handleClick}>点我加一</button>
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        }, console.log(this.state.count))
        console.log(this.divRef.current)
    }
}
