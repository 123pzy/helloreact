import React, { Component } from 'react'

function Child() {
    return (
        <ul>
            <li>111</li>
            <li>222</li>
            <li>333</li>
        </ul>
    )
}


function Navber() {
    return (
        <div>
            Navber
            <Child></Child>
        </div>
    )
}

class Swiper extends Component {
    render() {
        return (
            <div>
                Swiper
            </div>
        )
    }
}

const Tabbar = () => {
    return <div>Tabber</div>
}


export default class App extends Component {
    render() {
        return (
            <div>
                <Navber></Navber>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
