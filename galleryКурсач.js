var p = 0;
function itog() {
    document.getElementsByClassName('text')[0].textContent = p + "/4";
}
function plys() {
    p +=1;
    itog();
}
setTimeout(play, 10 * 1000);
function play() {
    if (p==4){
        document.getElementsByClassName('text2')[0].textContent = "Ты победил";
        document.getElementsByClassName('text2')[0].style.visibility = 'visible';
    }
    else{
        document.getElementsByClassName('text2')[0].textContent = "Ты проиграл";
        const elem = document.getElementsByClassName("image-button")[0];
        elem.style.display = 'block';
        console.log(elem);
        console.log(elem.style);
        console.log(elem.style.display);
        document.getElementsByClassName('text2')[0].style.visibility = 'visible';
    }
}

// 2. Галерея изображений
function changeImage(img) {
    document.getElementById('mainImage').src = img.src;
}

// 1. Подтверждение перехода по ссылкам с делегированием
document.getElementById('contents').addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        const leave = confirm('Вы действительно хотите покинуть страницу?');
        if (!leave) {
            event.preventDefault();
        }
    }
});
