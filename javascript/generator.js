$(document).ready(function() {
    var quoteText;
    var authorText;

    function getQuote() {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=38&callback=", function(a) {

            var indexNumberQuote = Math.floor(Math.random() * a.length);
            quoteText = a[indexNumberQuote].content;
            authorText = a[indexNumberQuote].title;
            $("#text").html(quoteText);
            $("#author").html("- " + authorText);
        })
    }

    getQuote();

    $("#getMessage").on("click", function() {
        getQuote()
    });


    $('#tweet').on('click', function() {
        window.open("https://twitter.com/intent/tweet?hashtags=RandomQuoteMachine&text=" + encodeURIComponent('"' + jQuery(quoteText).text() + '"  - ' + authorText), "my_window", "height=400, width=400");

    });
});