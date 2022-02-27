import {todo} from './interfacez'; //import interface to typescript

//class example
class Ichigo{
    Occupation:string
    age:number;
    dead:boolean;

    constructor(Occupation:string,age:number,dead:boolean){
        this.Occupation = Occupation;
        this.age = age;
        this.dead =dead;
    }

}

//implment interfaces
class Ido implements todo{
    manager: string = "Pochettino";
    trophies: number = 3;
    successful: boolean = true;

     tactics(): void {
         console.log(this.manager + " has won " + this.trophies + "." )
     }
     ///preseason?: string; Optional argument

}

class Kazui extends Ichigo{
    Occupation: string;

}


//enum gives friendly name to numeric types
enum oldFirm
{
    rangers = 55,
    celtic = 51
}

//create instances of objects
let vra = new Ichigo("Shinigami",17,false); 
let gr = new Kazui("well",4,true);
let ra = new Ido();

//print to console
console.log(vra.Occupation + "\n"+ vra.age + "\n"+vra.dead);
console.log(gr.Occupation + "\n"+ gr.age + "\n"+gr.dead);

//call void method
ra.tactics();

console.log("Celtic have won "+oldFirm.celtic+ " and Rangers have won "+oldFirm.rangers);


//type function
function bigdeal():number{
    return 4 + 3
}


//print to console
console.log(bigdeal());

