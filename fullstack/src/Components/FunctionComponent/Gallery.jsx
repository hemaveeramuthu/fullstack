import "react";
import {useState} from "react";

const Gallery=()=>{
    var [counter,setCount]=useState(10);
    function increment()
    {
        setCount(counter+1)
    }
    return (<section>
         <h1>This is my Gallery page</h1>
         <h2>Learning State</h2>
         <h3>The state of my variable counter is {counter}</h3>
         <button onClick={increment}>funcincre</button>
         <button onDoubleClick={()=>{setCount(counter+1)}}>Increment</button>
         <button onClick={()=>{setCount(counter-1)}}>decrement</button>
         <button onMouseOver={()=>{setCount(0)}}>reset</button>
       
             </section>);

}
export default Gallery;
