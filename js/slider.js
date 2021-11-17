$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 920,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 670,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});