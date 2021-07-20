const Account = require('./Models/Accountp');
const AccountC = require('./Models/Account');

/*var account = new Account("78","Gilberto Niño",100000,20000);
console.log(account.getResidue());

account.consign(50000);

if (account.drawOut(120000)){
    console.log(`Se ha realizado un retiro, nuevo saldo ${account.getResidue()}`);
}else {
    console.log(`No es posible el retiro`);
}
console.log(account.getResidue());


if (account.drawOut(10001)){
    console.log(`Se ha realizado un retiro, nuevo saldo ${account.getResidue()}`);
}else {
    console.log(`No es posible el retiro`);
}
console.log(account.getResidue());*/

var account = new AccountC("78","Horacio Ceballos",200000,50000);
console.log(account.getResidue());

account.consign(150000);

if (account.drawOut(300001)){
    console.log(`Se ha realizado un retiro, nuevo saldo ${account.getResidue()}`);
}else {
    console.log(`No es posible el retiro`);
}
console.log(account.getResidue());


