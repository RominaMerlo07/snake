//const e = require("express");

let v = [1, 2, 3, 4];
/* let result = v.map((x) => x * 2);
console.log(result);
*/

console.log(v);
const nmap = (array, cb) => {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        result[i] = cb(array[i]);
    }
    return result;
};

const resultado = nmap(v, (x) => x * 2);
console.log(resultado);

const r = resultado.reverse();
console.log(r);

console.log(r.sort());