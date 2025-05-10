//random generator password
function generatePassword(length,includeUppercase,includeLowercase,includeNumbers,includeSymbols){
    const lowerchar="abcdefghijklmnopqrstuvwxyz";
    const upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="!@#$%^&*()_+=";
    let allowchar="";
    let password="";

    allowchar+=includeLowercase?lowerchar:"";
    allowchar+=includeUppercase?upperchar:"";
    allowchar+=includeNumbers?numbers:"";
    allowchar+=includeSymbols?symbols:"";
    console.log(allowchar);
    if(length<8){
        return "Password length must be at least 8 characters";
    }
    if(allowchar.length===0){
        return "Select at least one character type";
    }
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowchar.length);
        password+=allowchar[randomIndex];
    }
    return password;
}




const passwordlength=8;
const includeUppercase=true;
const includeLowercase=true;
const includeNumbers=true;
const includeSymbols=true;

const password=generatePassword(passwordlength,
                                includeUppercase,
                                includeLowercase,
                                includeNumbers,
                                includeSymbols);

console.log(`Your password is: ${password}`);