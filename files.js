var fs = require('fs');

fs.readFile('./files/datos.dat',{encoding:"utf-8"}, (err, data) => {

    if (!err){
        console.log(data);
    }else{
        console.log(`Error-${err}`);
    }
});