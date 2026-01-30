var colorArr = ['yellow', 'red', 'orange'];
$(function () {
    // $('p em').css('background-color', 'yellow').each(function () {
    //     $('.result1').append($(this).text() + " ");
    // });

    // $('p em').css('background-color', function (i, o) {
    //     return colorArr[i];
    //     // return o;
    // }).each(function () {
    //     $('.result1').append($(this).text() + " ");
    // });

    $('div > em').css('background-color', 'pink').each(
        function() { $('.result2').append($(this).text() + " "); }
     );
});