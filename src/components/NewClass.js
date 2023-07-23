import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div>
                你好，类组件
            </div>
        )
    }
    test() {
        console.log(111);
    }
}

const app = new App()
app.test()

export default App