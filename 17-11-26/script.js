function isMatch(fingerprintA, fingerprintB) {
    if(fingerprintA.length == fingerprintB.length){
        let d = 0;
        for(let i = 0; i<fingerprintA.length; i++){
            if(fingerprintA[i] != fingerprintB[i]){
                d = d+1
            }
        }
        if(d <= (fingerprintA.length * 0.1)){
            return true;
        }
        else{
            return false;
        }
    }
    else if(fingerprintA.length != fingerprintB.length){
        return false;
    }
}
