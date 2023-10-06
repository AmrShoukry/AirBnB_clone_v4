$(document).ready(function () {
    // Fetch places from the API
    $('button').click(function () {
        $('input[type="checkbox"]').prop('checked', true);
        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({}),
            success: function (data) {
                // Handle the data and create <article> tags for each Place
                var placesSection = $('section.places');
                placesSection.empty(); // Clear existing content

                data.forEach(function (place) {
                    // Create an <article> tag for each Place
                    var article = $('<article></article>');

                    // Customize the content of the <article> tag based on Place details
                    // Example: article.html('<h2>' + place.name + '</h2>');

                    // Append the <article> tag to the placesSection
                    placesSection.append(article);
                });
            }
        });        
    })
});
