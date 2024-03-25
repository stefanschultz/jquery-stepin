// General syntax for selection and action:
// $(selector).action()


// Long syntax for jQuery to call a function when the document is ready:
$(document).ready(function() {
    console.log('jQuery is working - with long ready function!');
});


// Short syntax for jQuery to call a function when the document is ready:
$(function() {
    console.log('jQuery is working - with short ready function!');
});


$(function() {
    // selectors
    $("div[class^='myclass1']");
    $("div[class^='myclass1']").next(); // next sibling
    $("div[class^='myclass1']").prev(); // previous sibling
    $("div[class^='myclass1']").parent(); // parent element
    $("div[class^='myclass1']").children(); // child elements
    $("div[class^='myclass1']").siblings(); // sibling elements
    $("div[class^='myclass1']").first(); // first element
    $("div[class^='myclass1']").last(); // last element
    $("div[class^='myclass1']").find("span"); // find element

    // actions - SET
    $("div[class^='myclass1']").text("Hello Jupyter!");
    // $("div[class^='myclass1']").html("<button>Click me!</button>");
    $("div[class^='myclass1']").attr("title", "This is a div element");
    $("div[class^='myclass2']").find("input").val("Hello World!");

    // actions - GET
    console.log($("div[class^='myclass1']").text()); // get text
    console.log($("div[class^='myclass1']").html()); // get html
    console.log($("div[class^='myclass1']").attr("title")); // get attribute
    console.log($("div[class^='myclass2']").find("input").val()); // get value

    // actions - ADD
    $("div[class^='myclass1']").append("<p>Appended text</p>"); // add element
    $("div[class^='myclass1']").prepend("<p>Prepended text</p>"); // add element
    $("div[class^='myclass1']").before("<div>Before div</div>"); // add element
    $("div[class^='myclass1']").after("<div>After div</div>"); // add element
    $("div[class^='myclass1']").after(
        "<p>Text One</p>",
        "<p>Text Two</p>",
        "<p>Text Three</p>",
    ); // add multiple elements
    $("div[class^='myclass1']").addClass("myclass3"); // add class

    // actions - REMOVE
    $("div[class^='myclass-delete']").empty(); // remove all child elements
    $("div[class^='myclass-delete']").remove(); // remove the element itself
    $("div[class^='myclass1']").removeClass("myclass3"); // remove class

    // actions - TOGGLE / CSS CLASSES
    $("div[class^='myclass1']").addClass("mybg2") // change css
    $("div[class^='myclass1']").toggleClass("mybg2"); // hide/show element
    $("div[class^='myclass1']").removeClass("mybg2"); // remove class

    // CSS
    $("div[class^='myclass1']").css("background-color", "lightblue");
    console.log($("div[class^='myclass1']").css("background-color"));
    const myclass1_width = $("div[class^='myclass1']").css("width");
    const myclass1_height = $("div[class^='myclass1']").css("height");
    console.log(myclass1_width, myclass1_height);
    $("div[class^='myclass1']").css("text-transform", "uppercase");
    $("div[class^='myclass1']").css({
        "background-color": "lightblue",
        "color": "black",
        fontSize: "20px",
        fontFamily: "Sans-serif",
        padding: "1.5rem",
    });
    console.log("Width:", $("div[class^='myclass1']").width(), "px"); // width without padding
    console.log("Height:", $("div[class^='myclass1']").height(), "px"); // height without padding
    console.log("Inner width:", $("div[class^='myclass1']").innerWidth(), "px"); // width with padding
    console.log("Inner height:", $("div[class^='myclass1']").innerHeight(), "px"); // height with padding
    console.log("Outer width:", $("div[class^='myclass1']").outerWidth(), "px"); // width with padding and border
    console.log("Outer height:", $("div[class^='myclass1']").outerHeight(), "px"); // height with padding and border
    console.log("Outer width (margin):", $("div[class^='myclass1']").outerWidth(true), "px"); // width with padding, border and margin
    console.log("Outer height (margin):", $("div[class^='myclass1']").outerHeight(true), "px"); // height with padding, border and margin

    // EVENTS
    $("div[class^='myclass1']").click(function() {
        console.log("Clicked click()!");
        $(this).css("background-color", "lightgreen");
    });
    $("div[class^='myclass1']").on("dblclick", function() {
        console.log("Clicked on() by button!");
        $(this).css("background-color", "cadetblue");
    });
    $("div[class^='myclass1']").on("mouseout", function() {
        console.log("Mouse out on()!");
        $(this).css("background-color", "lightcoral");
    });

    $("form[id='myform']").submit(function(event) {
        event.preventDefault();
        console.log("Submitted form!", event);
    });
    $("form[id='myform']").find("input[type='submit']").hover(
        function() {
            $(this).css("background-color", "lightblue");
        },
        function() {
            $(this).css("background-color", "lightcoral");
        }
    );
    
    $("form[id='myform']").find("input[type='text']")
        .on({
            click: function() {
                    $(this).css("background-color", "lightblue");
                },
            dblclick: function() {
                    $(this).css("background-color", "cadetblue");
                },
            mouseout: function() {
                    $(this).css("background-color", "white");
                },
        });

        // each() method to iterate over elements
        $("ul[id='mylist']").each(function(index, element) {
            console.log(index, $(element).text());
        });

        $("ul[id='mylist']").click(function() {
            console.log(`index=${$(this).index()}`);
        });
        $("ul[id='mylist']").toArray().forEach(function(element) {
            console.log(element);
        });
});