/**
 * Created by ShouldNotBe on 11/29/2015.
 */

$(document).ready(function() {
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/checkRole.php',
        data: {},

        success: function (data) {
            if (data === "single" || data === "business") {

            }
            else {
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/index.html";
            }
        },
        error: function(e)
        {

        }
    });

});