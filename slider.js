const slider = $('.device').bxSlider({
    pager: false,
    controls: false
});

$('.devices__arrow--direction--prev').click((e) =>{
    e.preventDefault();
    slider.goToPrevSlide();
});

$('.devices__arrow--direction--next').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});