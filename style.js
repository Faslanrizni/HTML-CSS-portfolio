$(document).ready(function (){
    const  slidesDate=$('.slide');
    let pointer=0;

    function viewSlide(){
        slidesDate.removeClass('active');
        slidesDate.eq(pointer).addClass('active');

    }
    function next() {
        pointer++
        if (pointer >= slidesDate.length) {
            pointer=0;

        }
        viewSlide()
    }
    setInterval(next,3000);

})