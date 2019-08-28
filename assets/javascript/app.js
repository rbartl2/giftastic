$(document).ready(function(){
    var topics = ["friends", "frasier", "the office", "mad men", "the sopranos"];


    // create function to display tv show data in buttons
    function renderButtons(){
        //no repeat buttons
        $('#buttons-tv').empty();
        // loop through array of shows
        for (var i = 0; i < topics.length; i++){
            var btn = $('<button>');                // generate button for each show in array
            btn.addClass("tvShow");                 // add a class of tvShow to button
            btn.attr("data-name", topics[i]);       // added a data attribute
            btn.text(topics[i]);                    // initial button text
            $('#buttons-tv').append(btn);           // append buttons to initial div
        }
    }

    renderButtons();















})