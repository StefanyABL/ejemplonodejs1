class Account{
    constructor(number, customer, residue, residueMin){
        this.number=number;
        this.customer=customer;
        this.residue=residue;
        this.residueMin=residueMin;
    }

    setNumber(value){
        this.number=value;
    }
    getNumber(){
        return this.number;
    }


    setCustomer(value){
        this.customer=value;
    }
    getCustomer(){
        return this.customer;
    }


    getResidue(){
        return this.residue;
    }

    setResidueMin(value){
        this.residueMin=value;
    }
    getResidueMin(){
        return this.residueMin;
    }

    consign(value){
        this.setResidue(this.getResidue() + value);
    }

    drawOut(value){
        if (value<=(this.getResidue()-this.getResidueMin())){
            this.setResidue(this.getResidue()-value)
            return true;
        }
        return false;
    }

}

module.exports = Account;

const setResidue= function(value){
    this.residue=value;
}