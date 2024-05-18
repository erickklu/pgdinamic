$(document).ready(function() {
    $('a.nav-link').click(function(event) {
        event.preventDefault(); 

        var pageUrl = $(this).attr('href');

        $.get(pageUrl, function(data) {
            var content = $(data).find('#content').html();

            $('#content').html(content);
        });
    });
});
