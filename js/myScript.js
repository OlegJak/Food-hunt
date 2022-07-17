$(".menu__icon").click(function(){
    $(".menu").css({"display": "flex"})
    $(".menu").animate({
        width: "35%"
    }, 300);
    $("body").css({"overflow": "hidden"})
});

$(".nav__menu__cross").click(function () { 
    $(".menu").animate({
        width: "0%",
    }, 300);
    $("body").css({"overflow": "scroll"});
    $(".menu").css({"display": "none"})
});



let photo = [
    "img/food_1.png",
    "img/food_2.png",
    "img/food_3.png",
    "img/food_4.png",
    "img/food_5.png",
    "img/food_6.png",
]

$(".collumn__2__img__1").attr("src", photo[0]);
$(".collumn__2__img__2").attr("src", photo[1]);
$(".collumn__2__img__3").attr("src", photo[2]);
$(".collumn__2__img__4").attr("src", photo[3]);
$(".collumn__2__img__5").attr("src", photo[4]);
$(".collumn__2__img__6").attr("src", photo[5]);


let a = 0;
let b = 1;
let c = 2;
let d = 3;
let e = 4;
let g = 5;

$(".button_down").click(function() {
    

    if (a >= 5){
        a = -1;
    }

    if (b >= 5){
        b = -1;
    }

    if (c >= 5){
        c = -1;
    }

    if (d >= 5){
        d = -1;
    }

    if (e >= 5){
        e = -1;
    }

    if (g >= 5){
        g = -1;
    }

    $(".collumn__2__img__1").attr("src", photo[++a]);

    $(".collumn__2__img__2").attr("src", photo[++b]);

    $(".collumn__2__img__3").attr("src", photo[++c]);

    $(".collumn__2__img__4").attr("src", photo[++d]);

    $(".collumn__2__img__5").attr("src", photo[++e]);

    $(".collumn__2__img__6").attr("src", photo[++g]);

});

$(".button_up").click(function() {
    

    if (a <= 0){
        a = 6;
    }

    if (b <= 0){
        b = 6;
    }

    if (c <= 0){
        c = 6;
    }

    if (d <= 0){
        d = 6;
    }

    if (e <= 0){
        e = 6;
    }

    if (g <= 0){
        g = 6;
    }

    $(".collumn__2__img__1").attr("src", photo[--a]);

    $(".collumn__2__img__2").attr("src", photo[--b]);

    $(".collumn__2__img__3").attr("src", photo[--c]);

    $(".collumn__2__img__4").attr("src", photo[--d]);

    $(".collumn__2__img__5").attr("src", photo[--e]);

    $(".collumn__2__img__6").attr("src", photo[--g]);

});


