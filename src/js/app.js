// Icon search
var keyword = document.getElementById('keyword');
var search = document.getElementById('search-action');
// On CLICK
search.onclick = function() {
    // Construct URL
    var url = 'https://fontawesome.com/icons?d=gallery&m=free&q=' + keyword.value;
    // Open url in new window
    window.open(url, "_blank");
    // Clear search input
    keyword.value = '';
};
// On ENTER
keyword.addEventListener('keyup', function() {
    if (event.keyCode === 13) {
        // Trigger click function on search
        search.click();
    }
});
