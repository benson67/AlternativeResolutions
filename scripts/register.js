/**
 * Created by ShouldNotBe on 11/16/2015.
 */

$(document).ready(function() {

    $('#btnRegister').click(function () {

        password = $('#txtPassword1').val();
        password2= $('#txtPassword2').val();

        if (password === password2)
        {
            // match, so ok.
        }
        else
        {   // This is one way to do validation. Throw an alert and quit.
            alert("Error: Passwords do not match.");
            return;
        }

        // We didn't return, so we're ok to keep working.
        username = $('#txtRegisterName').val();
        prefName = $('#txtPrefName').val();
        type = "single"
        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/createUser.php',
            data: {id: username, password: password, name: prefName, type:type},

            success: function (data) {
                if (data === "error") {
                    alert("Registration unsuccessful, please try again.");
                }
                else {
                    // Successful login, we need to do something here.
                }
            },
            error: function(e)
            {

            }
        })


    });
});