import React, { Component } from "react";
import axios from 'axios'

export default class App extends Component {
    state = {
        cinemaList: []
    }
    constructor() {
        super()
        axios(({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4006462',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16901042452318247252721665","bc":"440300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })).then((res) => {
            console.log(res.data.data.films);
            // this.state.cinemaList = 
            this.setState({
                cinemaList: res.data.data.films
            })
        })

    }

    render() {
        return (
            <div>
                <input type="text" onInput={this.handleInput} />
                <ul>
                    {
                        this.state.cinemaList.map((item) =>
                            <div key={item.filmId}>
                                <li>{item.filmId}-{item.name}</li>
                                <img src={item.poster} alt="" style={{ width: '50vw' }} />
                            </div>)
                    }
                </ul>
            </div>
        )
    }
    handleInput = (e) => {
        let newCinemaList = this.state.cinemaList.filter(((item) => {
            return item.name.includes(e.target.value)
        }))
        console.log(newCinemaList);
        // this.setState({
        //     cinemaList: newCinemaList
        // })
    }
}