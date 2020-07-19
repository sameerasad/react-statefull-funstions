import React, {useState}  from 'react'
import {Message} from './Message'

     const App = () => {
   
    const [count, setCount] = useState(0)

    return (
        <div>
            <Message counter={count} />
            <br/>
            <button onClick={()=>setCount(count+1)}  >Click Me</button>
        </div>
    )
}

export default App
