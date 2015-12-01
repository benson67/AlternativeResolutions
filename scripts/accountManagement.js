/**
 * Created by ShouldNotBe on 11/28/2015.
 */


$(document).ready(function() {



    $('#btnUpdatePassword').click(function () {

        password = $('#txtPassword').val();
        password2 = $('#txtPassword2').val();
        oldPassword = $('#txtOldPassword').val();
        
        if (password === "")
        {
            alert("New password feild is not entered, please enter in");
            return;
        } else if (password2 === "")
        {
            alert("Repeat password feild 2 is not entered, please enter in");
            return;
        } else if (oldPassword === "")
        {
            alert("old password feild 2 is not entered, please enter in");
            return;
        }

        if (password === password2)
        {
            // match, so ok.
        }
        else
        {   // This is one way to do validation. Throw an alert and quit.
            alert("Error: Passwords do not match.");
            $('#txtPassword').val("");
            $('#txtPassword2').val("");
            return;
        }

        // We didn't return, so we're ok to keep working.
        prefName = $('#txtPrefName').val();
        type = "single";
        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/updatePassword.php',
            data: {password: oldPassword, newpassword: password},

            success: function (data) {
                if (data === "error") {
                    alert("Error: Password is incorrect.");
                    $('#txtOldPassword').val("");
                    $('#txtPassword').val("");
                    $('#txtPassword2').val("");
                }
                else {
                    alert("Password Updated");
                    $('#txtPassword').val("");
                    $('#txtPassword2').val("");
                }
            },
            error: function(e)
            {

            }
        });


    });

    $('#btnUpdateName').click(function () {

        prefName = $('#txtPrefName').val();
        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/updateUser.php',
            data: {prefname: prefName},

            success: function (data) {
                if (data === "error") {
                    alert("Preferred name not saved, please try again.");
                }
                else {
                    alert("Preferred name updated");
                }
            },
            error: function(e)
            {

            }
        })


    });


    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/pullPrefName.php',
        data: {},

        success: function (data) {
            if (data === "error") {
                alert("Preferred name not available, please enter a new preferred name and save.");
            }
            else {
                var d = jQuery.parseJSON(data);
                $('#txtPrefName').val(d.name);
            }
        },
        error: function(e)
        {

        }
    });

});