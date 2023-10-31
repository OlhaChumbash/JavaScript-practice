
let imagesArr = ['image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image1.jpg'];

let i = 0;

 function next() {
    document.images[0].src = imagesArr[i];
    activeName(i);
    i++; 
    if (i == imagesArr.length) {
        i = 0;
    }
}
 function prevImage() {
    i--; 
    if (i < 0) {
        i = imagesArr.length - 1;
    }
    document.images[0].src = imagesArr[i];
    activeName(i);
}


 function activeName(index){
    let imagesNames = document.getElementsByClassName("name");
    
    for (let i = 0; i < imagesNames.length; i++) {
         imagesNames[i].classList.remove("active");
    }
    imagesNames[index].classList.add("active");
 }
setInterval(next, 2000);
