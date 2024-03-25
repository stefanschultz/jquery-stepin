$(function() {
    // load the content of a file into an element
    $("div.myclass1").load("programming_languages.html", function(response, status, xhr) {
        if (status == "error") console.log("Error: " + xhr.status + " " + xhr.statusText);
        else console.log("Success: " + xhr.status + " " + xhr.statusText);
    });

    // load only a specific element from the file
    $("div.myclass1").load("programming_languages.html #programmingLanguages");

    // AJAX GET request
    $.get("programming_languages.json", {id: "languageList"}, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    });

    // AJAX POST request
    $.post("http://localhost:5000/programming_languages", {id: "languageList"}, function(data, status) {
        if (status == "success") console.log("Data: " + data + "\nStatus: " + status);
        else console.log("Error: " + status);
    });

    $.ajax({
        url: "programming_languages.json",
        data: {id: "languageList"},
        dataType: "json",
        type: "GET",
        success: function(data) {
            console.log("ajax() - Data: " + data);
        },
        error: function(xhr, status, error) {
            console.log("ajax() - Error: " + status + " " + error);
        }
    });
});