function contains(arr, value) 
{
    for (let i = 0; i < arr.length; i += 1) {
        if (value === arr[i]) return true;
    }

    return false;
}

console.log(contains([1, 2, 3], 5));
