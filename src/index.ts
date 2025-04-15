
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

//Function 
function add (num1:number,num2:number=10):number {
  return num1+num2

}
add(10,10)
// methods
const banker ={
  name:"Mehedi",
  balance:10,
  addBalance (balance:number):number{
    return this.balance+balance
  }
}
const balance =banker.addBalance(10)
console.log(balance);

//map fuction 
const numbers:number[] =[2,3,4]
const newNumbers:number[] =numbers.map((num:number):number=>num*num)
console.log(newNumbers);