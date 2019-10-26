'use strict'

var names = ['vasia', 'petia', 'anya', 'kolya'];

var container = document.querySelector('#block');

console.log(container);

var res = '';

for (const name of names) {
    res += `<li>${name}</li>`;
}
container.innerHTML = res;
console.log(res);