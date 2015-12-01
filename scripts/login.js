/**
 * Created by ShouldNotBe on 11/16/2015.
 */

$(document).ready(function() {
    // Checks if the user is logged in or not.
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/checkLogin.php',
        data: {},

        success: function (data) {
            if (data === "out") {
                $('#loginBox').css('display', '');
                $('#logoutBox').css('display', 'none');
            }
            else {
                $('#loginBox').css('display', 'none');
                $('#logoutBox').css('display', '');
                $('#lblUsername').text("Welcome: " + data);
            }
        },
        error: function(e)
        {

        }
    });


    $('#btnLogout').click(function () {

        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/logout.php',
            data: {},

            success: function (data) {
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/index.html";
            },
            error: function(e)
            {

            }
        })


    });


    $('#btnLogin').click(function () {

        name = $('#txtLoginID').val();
        password = $('#txtLoginPW').val();

        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/login.php',
            data: {id: name, password: password},

            success: function (data) {
                if (data === "error") {
                    alert("Invalid Login");
                }
                else {
                    if (data === "single" || data === "business")
                    {
                        window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/clientHome.html";
                    }
                    else if (data === "staff")
                    {
                        window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/staffHome.html";
                    }
                    else
                    {
                        window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/adminHome.html";
                    }
                }
            },
            error: function(e)
            {

            }
        })


    });
});

