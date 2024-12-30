// for in loop

arr=[10,20,[20.5,30.5],"a","kec",false]
console.log(arr);
/*
for(var a in arr)
{
    console.log(a);
    console.log("Elements present in the index",a,"is",arr[a]);
    
}
    */

//for of loop

for(var b of arr)
{
    console.log(b);
}