

// function setStyles (){
//     const tagsCollection = document.body.querySelectorAll('p');
//     tagsCollection.forEach((element, index) => {
//         if (index % 2 !== 0) {
//             element.style.fontSize = '24px';
//             element.style.color = 'yellow';
//             element.style.backgroundColor = 'pink';
//             element.style.border = '2px dashed red';          
//         }
//     });
// }
// setStyles();



function setStyles (){
    const tagsCollection = document.body.querySelectorAll('p');
    tagsCollection.forEach((element, index) => {
        if (index % 2 !== 0) {
            element.setAttribute('class', 'active')                     
        }
    });
}
setStyles();