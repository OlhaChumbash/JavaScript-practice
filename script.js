
const childElements = document.body.children;

let maxChildrenCount = 0;
let elementWithMostChildren = null;

for (const element of childElements) {
    if (element.children.length > maxChildrenCount) {
        maxChildrenCount = element.children.length;
        elementWithMostChildren = element;       
    }
}


if (elementWithMostChildren) {
    console.log(`${elementWithMostChildren.tagName} має найбільше дочірніх вузлів`);
} else {
    console.log('На странице нет элементов.');
}
