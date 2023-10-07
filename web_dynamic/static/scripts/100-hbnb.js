$(document).ready(function () {
    // Initialize variables to store selected State and City IDs
    var selectedStates = {};
    var selectedCities = {};

    // Listen for changes on state input checkboxes
    $('input[type="checkbox"][data-id^="state_"]').change(function () {
        // Check if the checkbox is checked
        if ($(this).prop('checked')) {
            // Get State ID and name from data attributes
            var stateId = $(this).data('id');
            var stateName = $(this).data('name');

            // Store State ID in the selectedStates object
            selectedStates[stateId] = stateName;
        } else {
            // If the checkbox is unchecked, remove State ID from the selectedStates object
            var stateId = $(this).data('id');
            delete selectedStates[stateId];
        }

        // Update the <h4> tag inside the div Locations with the list of selected States
        var stateList = Object.values(selectedStates).join(', ');
        $('div.Locations h4').text(stateList);
    });

    // Listen for changes on city input checkboxes
    $('input[type="checkbox"][data-id^="city_"]').change(function () {
        // Check if the checkbox is checked
        if ($(this).prop('checked')) {
            // Get City ID and name from data attributes
            var cityId = $(this).data('id');
            var cityName = $(this).data('name');

            // Store City ID in the selectedCities object
            selectedCities[cityId] = cityName;
        } else {
            // If the checkbox is unchecked, remove City ID from the selectedCities object
            var cityId = $(this).data('id');
            delete selectedCities[cityId];
        }

        // Update the <h4> tag inside the div Locations with the list of selected Cities
        var cityList = Object.values(selectedCities).join(', ');
        $('div.Locations h4').text(cityList);
    });

    // Handle button click event to make a POST request with selected filters
    $('button').click(function () {
        // Create an object to store selected filters (Amenities, States, and Cities)
        var selectedFilters = {
            'amenities': [],  // Add selected Amenities here
            'states': Object.keys(selectedStates),  // Get selected State IDs
            'cities': Object.keys(selectedCities)   // Get selected City IDs
        };

    });
});
