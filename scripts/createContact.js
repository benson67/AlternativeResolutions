/**
 * Created by petert77 on 11/25/15.
 */
$(document).ready(function() {

    $('#btnSave').click(function () {

        name = $('#txtPrefName').val();
        address = $('#txtAddress').val();
        phone = $('#txtPhone').val();
        email = $('#txtEmail').val();

        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/createContact.php',
            data: {contactName: name, phone: phone, address: address, email: email},

            success: function (data) {
                if (data === "error") {
                    alert("Contact information could not be saved, please try again later.");
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