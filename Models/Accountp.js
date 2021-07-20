function Accountp(number, customer, residue, residueMin){
    this.number=number;
    this.customer=customer;
    this.residue=residue;
    this.residueMin=residueMin;
}
//get y set de number
Accountp.prototype.setNumber = function (number){
    this.number=number;
}
Accountp.prototype.getNumber = function (){
    return this.number;
}
//get y set de customer
Accountp.prototype.setCustomer = function (customer){
    this.customer=customer;
}
Accountp.prototype.getNumber = function (){
    return this.customer;
}
//get y set de residue
Accountp.prototype.setResidue = function (residue){
    this.residue=residue;
}
Accountp.prototype.getResidue = function (){
    return this.residue;
}
//get y set de residueMin
Accountp.prototype.setResidueMin = function (residueMin){
    this.residueMin=residueMin;
}
Accountp.prototype.getResidueMin = function (){
    return this.residueMin;
}
//Consignar
Accountp.prototype.consign = function (value){
    this.setResidue(this.getResidue() + value);
}
//Retirar
Accountp.prototype.drawOut = function (value){
    if (value<=(this.getResidue()-this.getResidueMin())){
        this.setResidue(this.getResidue()-value)
        return true;
    }
    return false;
}

module.exports = Accountp;
