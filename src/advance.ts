//type assertion
const jogFun= (num:number)=>{
return num+5
}


// const value ="40" as number
// console.log(jogFun(value));

//interface Explore
interface User1 {
    name:string,
    age:number,
    isAdmin:boolean
}
interface User4  extends User1 {country:string};
const user1:User4 ={
    name:"Mehedi Hasan",
    age:23,
    isAdmin:true,
    country: "bangladesh"
}