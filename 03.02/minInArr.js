function minInArr(arr) {
    let minArr = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] < minArr) {
            minArr = arr[i];
        }
    }

    return minArr;
}

console.log(minInArr([5, -9, 2]));
