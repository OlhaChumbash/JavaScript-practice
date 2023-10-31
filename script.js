
function changeCSS(elem, value) {
    this.style[elem] = value;
}

const container = document.getElementById('container');

const changeCSSBind = changeCSS.bind(container);
changeCSSBind('backgroundColor', 'pink');

changeCSS.call(container, 'fontSize', '30px');

let colorBlue = ['color', 'blue'];
changeCSS.apply(container, colorBlue);

