$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    },
    animateCssHover: function (animationName, callback) {
        $(this).hover(
            function () {
                console.log('123');
                $(this).animateCss(animationName);
            },
            function () {
                $(this).removeClass(animationName);
            }
        );
    }
});

$('.design').animateCss('fadeIn');
$('.dev').animateCss('fadeIn');
$('.super').animateCss('fadeIn');

$('.design').animateCssHover('pulse infinite');
$('.dev').animateCssHover('pulse infinite');
$('.super').animateCssHover('pulse infinite');
$('.contacts i').hover(
    function () {
        $(this).addClass('circle');
    },
    function () {
        $(this).removeClass('circle');
    }
);

$(document).ready(function () {
    $(".logo").show();

    setTimeout(function () {
        $(".logo").addClass("resize");
    }, 2000); // время в мс

});

$(document).ready(function () {
    var x;
    var y;
    var x2;
    var y2;
    var l = -parseInt($('.bigLogo path').width() - $('body').width()) / 2;
    var t = -parseInt($('.bigLogo path').height() - $('body').height()) / 2;
    // $('.img_cont').css('left',l).css('top', t);
    $('body').mouseenter(function (e) {
        var x = e.pageX;
        var y = e.pageY;
        $('body').mousemove(function (b, d) {
            var x2 = b.pageX;
            var y2 = b.pageY;
            var p = x2 - x;
            var d = y2 - y;
            $('.bigLogo path').css({
                WebkitTransform: 'rotateX(' + (d / 200) + 'deg) rotateY(' + (p / 200) + 'deg) rotateZ(' + ((d - p) / 2000) + 'deg)'
            });
        });
    });


    $('.design').hover(
        function () {
            console.log('123');
            $('.bigLogo path').addClass('grey');
        },
        function () {
            $('.bigLogo path').removeClass('grey');
        }
    );

    $('.dev').hover(
        function () {
            console.log('123');
            $('.bigLogo path').addClass('grey1');
        },
        function () {
            $('.bigLogo path').removeClass('grey1');
        }
    );
    $('.super').hover(
        function () {
            console.log('123');
            $('.bigLogo path').addClass('grey2');
        },
        function () {
            $('.bigLogo path').removeClass('grey2');
        }
    );

});