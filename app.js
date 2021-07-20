const tools= require('./tools');

"use strict"
/*var x=56;
var y=53;
const r=x+y;
console.log(`La suma de ${x} + ${y} es ${r}`);
//console.log('La suma : '  + r);

const dates = process.argv.splice(2);
dates.forEach((value, index)=>{
console.log(`dates[${index}]=${value}`);
})*/

const dates = process.argv.splice(2);

/*for (date of dates){
    if (tools.cousing(parseInt(date))){
        console.log(`El numero ${date} es primo`);
    }else{
        console.log(`El numero ${date} NO es primo`);
    }
}*/

for (date3 of dates){

    if (tools.friends(parseInt(date3[2]), parseInt(date3[3]))){
        console.log(`El numero ${date3} es amigo`);
    }else{
        console.log(`El numero ${date3} NO es amigo`);
    }

}