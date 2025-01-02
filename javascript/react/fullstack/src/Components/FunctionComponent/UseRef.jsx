import {useEffect,useState,useRef} from"react";
var UseRef=()=>
{
    var [text,setText]= useState("");
    var prevText=useRef("");
    useEffect(()=>{
        prevText.current=text

    },[text])
        return(
        <section>
            <h1>this is an exampe of useRef</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
            <h2>my current render is {text}</h2>
            <h3>my prev render is {prevText.current}</h3>
        </section>
    );
}
export default UseRef;