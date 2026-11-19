function convert(heading) {
    if(heading.includes('#')){
        if(heading.startsWith('#') || heading.startsWith(' ')){
            let hash = 0;
            heading = heading.trimStart();
            for(let i = 0; i < heading.length; i++){
                if(heading[i] === '#'){
                    hash++;
                }else {break;}
            }
            if(hash < 7){
                if(heading[hash] === " "){
                    heading = heading.slice(hash+1);
                    heading = heading.trim();
                    return `<h${hash}>${heading}</h${hash}>`
                }else{return 'Invalid format';}
            }else{return 'Invalid format';}

        }
        else{return 'Invalid format';}
    }
    else{return 'Invalid format';}
}