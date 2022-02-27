function description(numb:number,name2:string):void{
   console.log("Name: "+ name2 + "\n" + "Age: " + numb);
}

let name1:string = "David"; //string
let age:number = 20; //number
let IsStudent:boolean =true; //true or false
let numOfYears: any[] = [2018,2019,2020,2021,2022];
let list:Array<number> = [1,2,4,4]; //generic type for Array

for(let i =0; i < list.length; i++){
    console.log("\nThe Years studied: "+ list[i]);
}


//enum gives friendly name to number
enum Color{pirate =3, soul =9, ninja=4};
console.log(Color.ninja + Color.pirate);

console.log("\nName: " + name1 + "\n" + "Age: " +age, "\nI am a student: "+ IsStudent + "\n");

for(let i =0; i < numOfYears.length; i++){
    console.log("\nThe Years studied: "+ numOfYears[i]);
}

console.log(numOfYears);
description(age,name1);
