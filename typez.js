function description(numb, name2) {
    console.log("Name: " + name2 + "\n" + "Age: " + numb);
}
var name1 = "David"; //string
var age = 20; //number
var IsStudent = true; //true or false
var numOfYears = [2018, 2019, 2020, 2021, 2022];
var list = [1, 2, 4, 4]; //generic type for Array
for (var i = 0; i < list.length; i++) {
    console.log("\nThe Years studied: " + list[i]);
}
//enum gives friendly name to number
var Color;
(function (Color) {
    Color[Color["pirate"] = 3] = "pirate";
    Color[Color["soul"] = 9] = "soul";
    Color[Color["ninja"] = 4] = "ninja";
})(Color || (Color = {}));
;
console.log(Color.ninja + Color.pirate);
console.log("\nName: " + name1 + "\n" + "Age: " + age, "\nI am a student: " + IsStudent + "\n");
for (var i = 0; i < numOfYears.length; i++) {
    console.log("\nThe Years studied: " + numOfYears[i]);
}
console.log(numOfYears);
description(age, name1);
