import 'react';
const Home=()=>{
    var styling={
        fontsize:"30px",
        textDecoration:"underline",
        color:"red"
    }
    return(
        <div className="box-model"> 
            <h1 id="idSEg">Fullstack Training </h1>
            <h2 style={{color:"blue"}}>Day 4</h2>
            <h3 style={styling}>CSS Styling</h3>
        </div>
    );
}
export default Home;

