$(document).ready(function () {
    $(".plus1").click(function () {
        $(".plus1").css('display','none')
        $(".minus1").css('display','inline-block')
        $(".disc1").slideDown(function () {
            $(this).animate({
            },800)
        })
    })
    $(".minus1").click(function () {
        $(".minus1").css('display','none')
        $(".plus1").css('display','inline-block')
        $(".disc1").slideUp(function () {
            $(this).animate({
            },800)
        })
    })
    $(".plus2").click(function () {
        $(".plus2").css('display','none')
        $(".minus2").css('display','inline-block')
        $(".disc2").slideDown(function () {
            $(this).animate({
            },800)
        })
    })
    $(".minus2").click(function () {
        $(".minus2").css('display','none')
        $(".plus2").css('display','inline-block')
        $(".disc2").slideUp(function () {
            $(this).animate({
            },800)
        })
    })
    $(".plus3").click(function () {
        $(".plus3").css('display','none')
        $(".minus3").css('display','inline-block')
        $(".disc3").slideDown(function () {
            $(this).animate({
            },800)
        })
    })
    $(".minus3").click(function () {
        $(".minus3").css('display','none')
        $(".plus3").css('display','inline-block')
        $(".disc3").slideUp(function () {
            $(this).animate({
            },800)
        })
    })
    $(".plus4").click(function () {
        $(".plus4").css('display','none')
        $(".minus4").css('display','inline-block')
        $(".disc4").slideDown(function () {
            $(this).animate({
            },800)
        })
    })
    $(".minus4").click(function () {
        $(".minus4").css('display','none')
        $(".plus4").css('display','inline-block')
        $(".disc4").slideUp(function () {
            $(this).animate({
            },800)
        })
    })
});