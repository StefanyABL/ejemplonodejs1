function isCousing(n) {
    var cousing=true;
    var cont=2;

    while(cont<=n/2 && cousing){
        cousing = !(n % cont++ ==0);
    }
    return cousing;
}

function isPerfect(n){

}

function isFriends(numOne, numTwo){
        var variable=true;
        numOne=parseFloat(numOne);
        numTwo=parseFloat(numTwo);
        div1=amigoDivisor(numOne);
        div2=amigoDivisor(numTwo);
        sum1=amigoSuma(div1);
        sum2=amigoSuma(div2);

        if(sum1==numTwo && sum2==numOne) {
            variable=true;
        } else {
            variable=false;
        }
        return variable;
    }

    function amigoDivisor(n) {
        var a=1;
        var b=0;
        var l = new Array();
        while(a<n) {
            var h = n % a;
            if(h == 0) {
                l[b]=a;
                b++;
            }
            a++;
        }
        return l;
    }

    function amigoSuma(L) {
        var lg=L.length;
        var a=0;
        var sum=0;
        while(a<lg) {
            sum=sum+L[a];
            a++;
        }
        return sum;
    }




exports.cousing = isCousing;
exports.friends = isFriends;