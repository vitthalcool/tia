// ! function(e) {
//     "use strict";
//     //Lefe sidebar
//     e(".sidebar-toggle").click(function() {
//         return e("body").toggleClass("sidebar-sm"), e(".sidebar-sm .sidebar").slimscroll({
//             color: "rgba(255,255,255,0.5)",
//             size: "3px",
//             touchScrollStep: 80,
//             height: e(window).height() - e("header").height() - e(".leftside .footer").innerHeight() + "px"
//         }), !1
//     }),e(".fixed-leftside .sidebar").slimscroll({
//         color: "rgba(255,255,255,0.5)",
//         size: "5px",
//         touchScrollStep: 80,
//         height: e(window).height() - e("header").height() - e(".leftside .footer").innerHeight() + "px"
//     }),
//     // Datepicker Sales Order Form
//     $(function () {
//         var dateNow = new Date();
//         $('#datetimepicker').datetimepicker({ 
//             defaultDate:dateNow
//         });
//     })
// }(jQuery);

$(function(e){
    $(".sidebar-toggle").click(function() {
        return e("body").toggleClass("sidebar-sm"), e(".sidebar-sm .sidebar").slimscroll({
            color: "rgba(255,255,255,0.5)",
            size: "3px",
            touchScrollStep: 80,
            height: e(window).height() - e("header").height() - e(".leftside .footer").innerHeight() + "px"
        }), !1
    });
    $("#scroll").slimScroll({
        height:  e(window).height() - e("header").height() - e(".leftside .footer").innerHeight() + "px",
        color: "rgba(255,255,255,0.5)",
        size: "3px",
        touchScrollStep: 80,
    });
    $(function () {
        var dateNow = new Date();
        $('#datetimepicker').datetimepicker({ 
            defaultDate:dateNow
        });
    })
})