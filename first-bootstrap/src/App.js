
import React, { useState} from "react"

function ExampleComponent ()  {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount( count + 1)}>Click me</button>
    </div>
  )
}

function App() {
  return (
    <>
      <ExampleComponent /> 
    </>
  );
}

export default App;
