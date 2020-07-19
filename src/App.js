import React, {useState}  from 'react'

     const App = () => {
   
    let [count, setCount] = useState(0)

    return (
        <div>
            <h3>value of count={count}</h3>
            <br/>
            <button onClick={function(){setCount(++count)}}  >Click Me</button>
        </div>
    )
}

export default App
