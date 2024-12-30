//eg1
/*async function funNAme() {
    return("Hello");
    
}

arrowfunc=async()=>
{
    return "kec"
}
console.log(funNAme());//op:proimse{hello}
console.log(arrowfunc());*///displays proimse{kec}

//eg2
/*   async function funNAme() {
    console.log("Hello");
    
}

arrowfunc=async()=>
{
   console.log("kec");
}
funNAme();//op:hello
arrowfunc();//op:kec
*/
/*async function funNAme() {
    setTimeout=(()=>{
    return("Hello");
    },1000);
    
}



arrowfunc=async()=>
{
    return "kec"
}
console.log(funNAme());//op:promise{undefined}
console.log(arrowfunc());//op:promise{kec}*/
 //eg4 to remove promise

/*async function funNAme() {
    setTimeout(()=>{
    console.log("Hello");
    },5000);
    console.log(await "Hello");
    
}

arrowfunc=async()=>
{setTimeout(()=>{
    console.log("kec");
    },4000);
    console.log(await "KEC");
}
funNAme();
arrowfunc();//op:promise{kec}*/