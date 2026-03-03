function sumArray(arr) {
    let sumarr = 0;

    for (let i = 0; i < arr.length; i += 1) {
        sumarr += arr[i];
    }

    return sumarr;
}

console.log(sumArray([-1, 0, 9, 6, -4]));
