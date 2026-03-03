function power(base, exp) {
    let mul = 1;

    for (let i = 0; i < exp; i += 1) {
        mul *= base;
    }

    return mul;
}

console.log(power(2, 8));
