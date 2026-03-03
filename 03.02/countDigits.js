function countDigits(n) {
    n = Math.abs(n);
    
    if (n === 0) return 1;

    let count = 0;
    
    while (n > 0) {
        n = Math.floor(n / 10);
        count += 1;
    }

    return count;
}

console.log(countDigits(98731));
