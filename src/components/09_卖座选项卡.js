import React, { Component } from 'react'
import './css/maizuo.css'
import Film from './maizuocomponents/Film'
import Cinema from './maizuocomponents/Cinema'
import Center from './maizuocomponents/Center'

export default class App extends Component {
    state = {
        title: [
            {
                id: 1,
                content: '电影'
            }, {
                id: 2,
                content: '影院'
            }, {
                id: 3,
                content: '我的'
            }
        ],
        current: 1
    }
    whichComponent() {
        switch (this.state.current) {
            case 1:
                return <Film></Film>
            case 2:
                return <Cinema></Cinema>
            case 3:
                return <Center></Center>
            default:
                return null
        }
    }
    render() {
        return (
            <div>
                <div>
                    {/* 写法1： */}
                    {/* {
                        this.state.current === 1 && <Film></Film>
                    }
                    {
                        this.state.current === 2 && <Cinema></Cinema>
                    }
                    {
                        this.state.current === 3 && <Center></Center>
                    } */}
                    {/* 写法2： */}
                    {
                        this.whichComponent()
                    }
                </div>
                <ul className='ul'>
                    {
                        this.state.title.map((item) => <li key={item.id} className={this.state.current === item.id ? 'active li' : 'li'} onClick={() => { this.handleClick(item.id) }}>{item.content}</li>)
                    }
                </ul>
            </div>
        )
    }
    handleClick(id) {
        this.setState({
            current: id
        })
    }
}
