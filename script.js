'use strict'

var names = ['vasia', 'petia', 'anya', 'kolya'];
var cities = ['dnepr', 'kiev', 'odessa', 'lviv'];

function renderList(data, containerId) {
    var container = document.querySelector(containerId);

    console.log(container);

    var res = '';

    for (const item of data) {
        res += `<li>${item}</li>`;
    }
    container.innerHTML = res;
    console.log(res);
}
renderList(names, '#names');
renderList(cities, '#cities');

