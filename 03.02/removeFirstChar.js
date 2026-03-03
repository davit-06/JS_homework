function remFirstCh (str) {
    let str1 = "";

    for (let i = 0; i < str.length; i += 1) {
        if (str[i] === str[0]) continue;

        str1 += str[i];
    }

    return str1;
}

console.log(remFirstCh("hello world"));
