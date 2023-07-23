import React, { Component } from 'react'
import './css/index.css'

export default class App extends Component {
    myinput = React.createRef()
    state = {
        todolist: [{
            id: 1,
            content: '吃鸡蛋'
        }, {
            id: 2,
            content: '吃面包'
        }]
    }
    render() {
        return (
            <div className='todolist-container'>
                <input type="text" ref={this.myinput} />
                <button onClick={() => { this.addTodo() }}>添加待办</button>
                <ul>
                    {
                        this.state.todolist.map((item) =>
                            <div className='todolist-box' key={item.id}>
                                <li>{item.content}</li>
                                {/* 支持富文本(有风险)： */}
                                {/* <span dangerouslySetInnerHTML={{ __html: item.content }}></span> */}
                                {/* <input type="text" value={item.content} /> */}
                                <button className='btn' onClick={() => { this.deleteTodo(item.id) }}>删除</button>
                                {/* <button onClick={() => { this.changeTodo(item.id) }}>修改</button> */}
                            </div>
                        )
                    }
                </ul>
                {/* 条件渲染的三种方式： */}
                {/* {
                    this.state.todolist.length === 0 ? <div>暂无待办</div> : null
                } */}
                {/* {
                    this.state.todolist.length === 0 && <div>暂无待办</div>
                } */}
                <div className={this.state.todolist.length !== 0 ? 'hidden' : ''}>暂无待办</div>
            </div>
        )
    }
    addTodo() {
        // 先push进去，但不推荐这样直接修改状态
        // this.state.todolist.push({ id: this.state.todolist.length + 1, content: this.myinput.current.value })
        // 为了不直接修改原数组，推荐：
        let newList = [...this.state.todolist]
        newList.push({ id: new Date().getTime() + Math.random(), content: this.myinput.current.value })
        // 此时todolist的值已经改变，只需要通知react更新一下这个数组的值即可
        this.setState({
            todolist: newList
        })
        this.myinput.current.value = ''
    }
    deleteTodo(id) {
        let newList = this.state.todolist.filter((item) => item.id !== id)
        this.setState({
            todolist: newList
        })
    }
    // changeTodo(id) {
    //     let newList = [...this.state.todolist]
    //     newList.forEach((item) => {
    //         if (item.id === id) {
    //             item.innerHTML = 
    //         }
    //     })
    // }
}