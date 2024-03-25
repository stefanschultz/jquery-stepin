$(function() {
    $("div.myclass1").show();
    $("div.myclass1").slideDown(1500);
    $("div.myclass1").slideUp(1500);
    $("div.myclass1").slideToggle(1500);

    $("div.myclass1").toggle(1500);
    $("div.myclass2").hide(1000);

    $("div.myclass1").show(function() { console.log("Showed myclass1!"); });
    $("div.myclass2").fadeIn(3500);
    $("div.myclass2").fadeOut(3500);
    $("div.myclass2").show();
    $("div.myclass2").fadeTo(3500, 0.5);

    $("div.myclass1").show()
    $("div.myclass1").animate({
        width: "200px",
        height: "200px",
        opacity: 0.5,
        fontSize: "40px",
        padding: "1.5rem",
    }, 1500);
});