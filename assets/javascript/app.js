$(document).ready(function(){
    var topics = ["friends", "frasier", "the office", "mad men", "the sopranos"];

    // function to display gifs to html
    function displayGifs(){
        var show = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=5Gi9X3cdkNgLAhoVIqyDKGgi6LMOx6Sc&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var results = response.data;
            for (var i = 0; i < results.length, i++){
                var topicsDiv = $("<div>");
                var rating = results[i].rating;
                var p = $('<p>').text("Rating: " + rating);
                var topicsImg = $('<img>');
            }
        })
    }


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