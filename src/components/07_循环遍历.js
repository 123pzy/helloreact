import React, { Component } from "react";

export default class App extends Component {
    state = {
        list: [{
            id: 1,
            content: 111
        },
        {
            id: 2,
            content: 222
        },
        {
            id: 3,
            content: 333
        }]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item) => <li key={item.id}>{item.content}</li>)
                    }
                </ul>
            </div>
        )
    }
}