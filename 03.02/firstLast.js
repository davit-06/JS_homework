function firstAndLast(arr) {
    if (arr.length === 1) return [arr[0], arr[0]];

    return [arr[0], arr[arr.length - 1]];
}

console.log(firstAndLast([3]));
