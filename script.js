

function myFunck(callback, color) {
    const element = document.getElementById('container');
    if (element) {
        callback(element, color);
    } else {
        console.error("Елемент не знайдено");
    }
}

function setBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}

myFunck(setBackgroundColor, 'green'); 

