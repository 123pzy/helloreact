# 1. 介绍

虚拟DOM（Virtual DOM、vdom）：把真实DOM树转换成js对象树。

# 2. 事件

改变this指向的三个方法：

call()：自动执行

apply()：自动执行

bind()：不会自动执行

箭头函数的this不管是谁调用的箭头函数，this永远是他的外部作用域

# 3. 获取dom节点

点击事件没传参的时候会**默认**传过来一个事件对象：

```jsx
import React, { Component } from "react";

export default class App extends Component {
    render() {
        return (
            <div>
                <input type="text" onInput={this.handleInput} />
            </div>
        )
    }
    handleInput = (e) => {
        // 获取input框中的值
        console.log(e.target.value);
    }
}
```



```jsx
import React, { Component } from 'react'

export default class App extends Component {
    mytext = React.createRef()
    render() {
        return (
            <div>
                <div ref={this.mytext}>
                    {this.num}
                </div>
                <button onClick={() => { console.log(this.mytext.current); }}>点我获取dom节点</button>
            </div >
        )
    }
    constructor() {
        super()
        this.num = 1
    }
}
```

# 4. react组件中触发事件的四种方式

```jsx
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
```

# 5. 状态

state是固定命名

`this.setState({})`

```jsx
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
```

`setState()`执行之后render函数会重新执行一次，所以render函数中不要放不能执行多次的代码，比如发送请求

# 6. 遍历

使用`{list.map((item)=><li key={item.id}>{item.content}</li>)}`

```jsx
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
```

key值最好是item.id，如果不涉及增加、删除、重排，可以设置为index

# 7. setState()

如果setState处在同步的逻辑中，异步更新状态，异步更新真实DOM

如果setState处在异步的逻辑中，同步更新状态，同步更新dom

setState接收一个回调函数作为第二个参数，状态和DOM更新完之后会被触发。

```jsx
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={() => { this.handleClick() }}>点我加一</button>
            </div>
        )
    }
    handleClick() {
        this.setState({ count: this.state.count + 1 },()=>{
            console.log(456);
        })
        console.log(123);
    }
}
```

![image-20230723200824548](http://panpan.dapanna.cn//image-20230723200824548.png)

setState的第一个参数接受一个变量作为之前的状态对象：

```jsx
handleClick() {
    this.setState(prevState => { 
        return { 
            count: prevState.count + 1 
        }
    })
    console.log(123);
}
```

