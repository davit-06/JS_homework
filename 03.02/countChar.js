function countChar(str, ch)
{
    let count = 0;

    for (let i = 0; i < str.length; i += 1) {
        if (ch === str[i]) count += 1;
    }

    return count;
}

console.log(countChar("hello world", "d"));
