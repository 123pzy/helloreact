import React, { Component } from 'react'

export default class App extends Component {
    name = 'panpan'
    render() {
        return (
            <div>
                <div>123</div>
                <button onClick={this.handleClick1}>click1</button>
                <button onClick={this.handleClick2}>click2</button>
                <button onClick={() => { console.log('click3', this.name); }}>click3</button>
                <button onClick={() => { this.handleClick4() }}>click4</button>
            </div>
        )
    }
    handleClick1() {
        console.log('click1', this.name);
    }
    handleClick2 = () => {
        console.log('click2', this.name);
    }
    handleClick4() {
        console.log('click4', this.name);
    }
}
