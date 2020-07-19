import React, {useState}  from 'react'

     const App = () => {
   
    let [count, setCount] = useState(0)

    return (
        <div>
            <h3>value of count={count}</h3>
            <br/>
            <button onClick={()=>setCount(count+1)}  >Click Me</button>
        </div>
    )
}

export default App
