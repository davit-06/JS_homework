let obj = {code: "hello world", line: 1};

let objTrue = true;
let objFalse = false;

if (objTrue) {
    obj.year = 15;
}

if (objFalse) {
    obj.year = 1;
}

console.log(obj);