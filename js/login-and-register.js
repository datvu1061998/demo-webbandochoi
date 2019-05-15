$(document).ready(function () {
    $(".dangNhap").click(function (e) { 
        e.preventDefault();
        $(".register").removeClass("hienForm");
        $(".login").removeClass("anForm");
        $(".register").addClass("anForm");
        $(".login").addClass("hienForm");
    });

    $(".dangKy").click(function (e) { 
        e.preventDefault();
        $(".login").removeClass("hienForm");
        $(".register").removeClass("anForm");
        $(".login").addClass("anForm");
        $(".register").addClass("hienForm");
    });
});