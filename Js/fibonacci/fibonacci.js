let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let output = document.getElementById('output');
let outputArray = [];
let direction;

function * fibo (forward = true) {
    forward = forward === undefined ? true : forward;
    let a = [0, 1];
    const step = (f, a) => f ? [a[1], a[0]+a[1]] : [a[1]-a[0], a[0]];
    for(; true; ) {
        const f = yield a[0];
        forward = f===undefined ? forward : f;
        a = step(forward, a);
    }
}

var f = fibo(false);

/*let n = Number(prompt('Введите число'));

let dir = prompt('left or right');
if (dir === 'left'){
    for (let i = 0; i < n ; i++) {
        outputArray.push(f.next(false).value);
    }
    output.innerHTML = outputArray;
}else{
    for (let i = 0; i < n ; i++) {
        outputArray.push(f.next(true).value);
    }
    output.innerHTML = outputArray;
}*/

btnLeft.addEventListener("click", function () {
   output.innerHTML += f.next(false).value + ', ';
});

btnRight.addEventListener("click", function () {
    output.innerHTML += f.next(true).value  + ', ';
});

