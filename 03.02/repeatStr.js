function repeatString(str, n) 
{
    let str1 = "";
    
    for (let i = 0; i < n; i += 1) {
        str1 += str;
    }

    return str1;
}

console.log(repeatString("Hello", 0))
