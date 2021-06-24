//undefined es false
if (undefined)
    console.log('entre');
else
    console.log('no entre');

if ('algo')
    console.log('entro');
else
    console.log('no entro');

//ejemplo1
const wtfParImar = (numero, callback) => {
    if (numero === 0)
        callback('WTF'); //equivalente a callback('WTF',undefined);
    else {
        if (numero % 2 === 0)
            callback(undefined, 'PAR');
        else callback(undefined, 'IMPAR');
    }
}

wtfParImar(0, (e, result) => {
    if (e)
        console.error(`result: ${e}`);
    else console.log(`result: ${result}`);
})

//ejemplo2
const wtfParImar2 = (numero, callback) => {
    if (numero === 0)
        callback(500, 'WTF');
    else {
        if (numero % 2 === 0)
            callback(200, 'PAR');
        else callback(200, 'IMPAR');
    }
}

wtfParImar2(0, (status, result) => {
    if (status === 500)
        console.error(`status: ${status} result: ${result}`);
    else console.log(`status: ${status} result: ${result}`);
})

//ejemplo3
const parImpar = (numero, callback) => {
    let result = (numero % 2 === 0) ? 'par' : 'impar'

    callback(numero, result)

}

parImpar(40, (num, res) => {
    console.log(`El numero ${num} es ${res}`);
});


const reduce = (v, callback) => {
    let a = v[0] //a=1
    for (c = 1; c < v.length; c++) { //c=2
        a = callback(a, v[c])
            //2
    }
    return a
};

let v = [1, 2, 3, 4];

let a = reduce(v, (previusValue, currentValue) => {
    console.log(`previus=${previusValue} - current=${currentValue}`);
    return previusValue * currentValue;
});

console.log(a);

let t = v.reduce((previusValue, currentValue) => {

    console.log(`previus=${previusValue} - current=${currentValue}`);
    return previusValue * currentValue;

});

console.log(v.reduce((x, y) => x + y));

console.log(t);