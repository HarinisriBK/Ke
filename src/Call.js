import React, { useCallback, useState } from 'react'

const Call = () =>{
    const[count,setCount] = useState(0);
    const handleClick = useCallback(() =>{
        console.log(`Button clicked. Count: ${count}`);
    },[count]);

    return (
    <div>
  <button onClick ={handleClick}>Click Me..</button>
  <p>COUNT:{count}</p>
  <button onClick ={() => setCount(count +100)}>Increment</button> 

    </div>
  );
    };
export default Call;
