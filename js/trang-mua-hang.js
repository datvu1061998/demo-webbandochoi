$(document).ready(function () {
    $(".nav-content .nav-link").click(function (e) {
        e.preventDefault();
        $(".nav-content .nav-link").removeClass("current");
        $(this).addClass("current");
    });
    var lengthul = $(".ul-list-hinhNho li").length;
    lengthul -= 3;

    var click_right = 0;
    var click_left = lengthul;
    $(".right").click(function (e) {
        if (lengthul > click_right) {
            click_right++;
            click_left--;      
            var leftul = parseInt($(".ul-list-hinhNho").css("left"));
            leftul -= 80;
            e.preventDefault();
            TweenLite.to($(".ul-list-hinhNho"), 0.4, { left: leftul + "px", ease: Power3.easeOut });
        }
    });
    $(".left").click(function (e) {
        if (lengthul > click_left) {
            click_left++;
            click_right--;
            var leftul = parseInt($(".ul-list-hinhNho").css("left"));
            leftul += 80;
            e.preventDefault();
            TweenLite.to($(".ul-list-hinhNho"), 0.4, { left: leftul + "px", ease: Power3.easeOut });
        }
    });
});