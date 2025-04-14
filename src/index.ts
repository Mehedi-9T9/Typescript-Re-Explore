
const tasting = (nam: string): string => {
    return `Hello, ${nam}!`;
  };
  
  console.log(tasting(" I ❣️ TypeScript "));


//Data type Explore
//string
const fullName:string = "Mehedi Hasan"

//number 
const roll:number = 5

//boolean 
const isActive : boolean=true

//null 
const nullValue : null=null

//array 
const fruits:string[] =["apple","banana","orang"]

//tuple
const nameAge:[string,number] =["Mithu",25]

//Object-
const person: {
  firstName:string;
  middleName ?:string  //optional type
  lastName:string;
  company:string
} ={
  firstName:"Rifat",
  lastName:'Hosen',
  company:"2B Fashion"
}


//access Modifire
const user:{
 readonly distric:"naogaon";
  name:"ABC"
}={
  distric:"naogaon",
  name:"ABC"
}