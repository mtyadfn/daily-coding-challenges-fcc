function verify(message, key, signature) {
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    const upp = alph.toUpperCase();
    const alphUpp = alph.concat('', upp);
    const mesKey = message.concat('', key);
    let value = 0;

    for(let i = 0; i < alphUpp.length; i++){
        for(let j = 0; j < mesKey.length; j++){
            if(alphUpp[i] === mesKey[j]){
                // console.log(`huruf alphUpp indeks [${i}] ${alphUpp[i]} = huruf message indeks [${j}] ${mesKey[j]}. value huruf ini = ${i+1} `);
                value = value + (i+1);
            }
        }
    }

    // console.log(value);
    if(signature === value){
        return true;
    } else { return false; }
}