$(document).ready(function() {
    // add new language item
    $("#addLanguageItem").on("click", function(event) {
        event.preventDefault(); // prevent form submission
        let language = $("#newLanguageItem").val().trim();
        
        if (language === "") return; // ignore empty input

        console.log("Language:", language);
        let newLanguageItem = `<li id="${language}">${language}</li>`; // create new list item
        $("#languageList").append(newLanguageItem); // append new list item
        $("#newLanguageItem").val(""); // clear input field

        // add event listener to new list item
        $("#addedNewItem").empty().text(`Added new language item: ${language}`);s
    });

    // remove language items
    $("#deleteLanguageItems").on("click", function(event) {
        $("#languageList").empty(); // remove all list items
        $("#addedNewItem").text("Removed all language items.");
    });
});