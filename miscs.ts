//Generic example
function identity(arg:any):any{
return arg
}

function identity2<T>(arg:T):T{
    return arg
}

console.log(identity2(4));

console.log(identity("everyone"));

//arrow function rewrites a regular function
let arrowz = (z:number,y:number) => {return z+y};

console.log(arrowz(4,4));

//this keyword
class JOJO{
 part1:string

 constructor(part1:string){
  this.part1 =part1;
 }

}

let john = new JOJO("DIO!!");
console.log(john.part1);

//2D Array
let multList:number[][] = [[1,3,4,5],[4,3,3,3],[7,5,2,0]];
console.log("2d array: "+ multList[0][3]); //return 5
console.log("2d array: "+ multList[1][0]); //return 4
console.log("2d array: "+ multList[2][2]); //return 2

//Map Function
let singles:number[] = [3,6,9,16];
let triples:number[] = singles.map(function(el)
{
  return el*3;}

);

console.log("single: "+singles);
console.log("triple:  "+triples);

