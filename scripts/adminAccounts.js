/**
 * Created by ShouldNotBe on 11/28/2015.
 */

$(document).ready(function() {
    pageLoad();
});


function pageLoad()
{

    $('#btnCreateAccount').click(function () {

        // We didn't return, so we're ok to keep working.
        username = $('#txtRegisterName').val();
        prefName = username;
        password = "ARTempPassword";
        type = "staff"
        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/createUser.php',
            data: {id: username, password: password, name: prefName, type:type},

            success: function (data) {
                if (data === "error") {
                    alert("Registration unsuccessful, please try again.");
                }
                else {
                    alert("User created with temporary password: \"" + password + "\"\nPlease have them log in and change their password.");
                    pageLoad();
                }
            },
            error: function(e)
            {

            }
        })


    });


    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllAccounts.php',
        data: {},
        dataType: "json",
        success: function (data) {
            if (data === "error") {
                alert("Error fetching service data");
            }
            else {
                createTable(data);
                $('.btnDelete').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/deleteAccount.php',
                        data: {id: this.id},

                        success: function (data) {
                            pageLoad();
                        },
                        error: function(e)
                        {

                        }
                    });

                });
            }
        },
        error: function(e)
        {

        }
    });

}

function createTable(data)
{
    $('#userList').find("tr:gt(0)").remove();

    for (var i = 0; i < data.length; i++)
    {
        drawRow(data[i]);
    }
}

function drawRow(row)
{
    console.log(row);
    var r = $("<tr />");

    $('#userList').append(r);

    console.log(row.name);

    r.append($("<td>" + row.id + "</td>"));
    r.append($("<td>" + row.type + "</td>"));

    r.append($('<button/>', {
        text: 'Delete',
        id: row.id,
        class: 'btnDelete'
    }));

}
