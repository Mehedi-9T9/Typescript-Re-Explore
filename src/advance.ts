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

//Generic Type
const number : Array<number> =[1,2,3,4]
const text : Array<string>=['a','b','c']
const boolean:Array<boolean> =[true, false]

//dynamic Generic type 
type GenericArray<T> =Array<T>
const colors2:GenericArray<string>=['red','green','blue']




//Generic dynamic array of Object
type StudentType ={name:string,age:number,roll:number}
const students:GenericArray<StudentType>=[
    {
        name:"Mehedi Hasan",
        age:24,
        roll:2
    },
    {
        name:"Nahid Hasan",
        age:13,
        roll:4
    }
]

//Generic Tuple
type GenericTuple<X, Y>= [X,Y]
const player:GenericTuple<number,{name:string,age:number}> =[11,{name:"Neymar JR",age:28}]


//Generic Function
const createArray =<T>(text:T,num:T) =>{
    return [text,num]
}
createArray<number>(22,33)

//Generic Function Tuple
const createTupleArr =<T,Q>(val1:T ,val2:Q)=>{
    return [val1,val2]
}
createTupleArr<number,string>(12,"Mehedi")




//how to added a valiable in any user
const setCoures =<T>(student:T)=>{
    const course ="Developer"
    return{
        ...student,
        course
    }
}
console.log(setCoures<{name:string,age:number}>({name:"Mehedi",age:23}));

//constains = extends Explore
const createDeveloper =<T extends {name:string,id:number,age:number}>(student:T)=>{
    const course ="Frontend Developer"
    return{
        ...student,
        course
    }

}
createDeveloper({name:"Mehedi",age:23,id:33})