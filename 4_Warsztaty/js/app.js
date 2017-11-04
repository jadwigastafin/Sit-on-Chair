

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM");

    var next = document.querySelector('#rightArrow');
    var prev = document.querySelector('#leftArrow');
    var list = document.querySelectorAll('.slider li');
    console.log(next, prev, list);

    var indeks = 0;
    console.log(indeks);

    list[indeks].classList.add('visible');

    next.addEventListener("click", function(){
        list[indeks].classList.remove('visible');
            indeks++

        if (indeks >= list.length){
                indeks = 0;
        }

        list[indeks].classList.add('visible');
    })

    prev.addEventListener("click", function () {
        list[indeks].classList.remove('visible');
        indeks--

        if(indeks < 0){
            indeks = list.length-1;
        }

        list[indeks].classList.add('visible');
    })







});