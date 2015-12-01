/**
 * Created by petert77 on 11/25/15.
 */

$(document).ready(function() {

    // Load and populate the fields


    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/pullContact.php',
        //dataType: "json",
        data: {},

        success: function (data) {

            if (data === "error")
            {
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/contactList.html";
            }

            console.log(data);
            var d = jQuery.parseJSON(data);


            $('#txtPrefName').val(d.name);
            $('#txtAddress').val(d.address);
            $('#txtPhone').val(d.phone);
            $('#txtEmail').val(d.email);

        },
        error: function(e)
        {

        }
    });






    $('#btnUpdate').click(function () {

        name = $('#txtPrefName').val();
        address = $('#txtAddress').val();
        phone = $('#txtPhone').val();
        email = $('#txtEmail').val();

        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/updateContact.php',
            data: {contactName: name, phone: phone, address: address, email: email},

            success: function (data) {
                if (data === "error") {
                    alert("Contact information could not be saved, please try again.");
                }
                else {
                    alert("Contact Saved");
                    window.location="http://webdev.cs.uwosh.edu/students/petert77/team6/contactList.html"
                }
            },
            error: function(e)
            {

            }
        })


    });
});