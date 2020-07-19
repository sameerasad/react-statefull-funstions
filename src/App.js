import React, {useState}  from 'react'

const app = () => {
   
    let [count, setCount] = useState(0)

    return (
        <div>
            <p1>click here {count}time</p1>
        </div>
    )
}

export default App
