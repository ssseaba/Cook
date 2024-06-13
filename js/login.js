$(document).ready(function() {
    $("#openPopup").click(function() {
        $("#popup").show();
    });

    $(".close").click(function() {
        $("#popup").hide();
    });

    $(document).mouseup(function(e) {
        var popup = $("#popup");
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            popup.hide();
        }
    });
});