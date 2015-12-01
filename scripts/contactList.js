/**
 * Created by petert77 on 11/27/15.
 */

$(document).ready(function() {
    pageLoad();
});


function pageLoad()
{
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllContacts.php',
        data: {},
        dataType: "json",
        success: function (data) {
            if (data === "error") {
                alert("Error fetching contact data");
            }
            else {
                createTable(data);
                // Set up the event handler for these buttons.
                $('.btnEdit').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/sessionContact.php',
                        data: {id: this.id},

                        success: function () {
                            window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/editContact.html";
                        },
                        error: function(e)
                        {

                        }
                    });

                });

                $('.btnDelete').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/deleteContact.php',
                        data: {id: this.id.substring(1)},

                        success: function (data) {
                            pageLoad();
                        },
                        error: function(e)
                        {

                        }
                    });

                });

                $('.btnPrimary').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/makePrimary.php',
                        data: {id: this.id.substring(1)},

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

    $('#btnAddContact').click(function () {
        window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/createContact.html"
    });
}

function createTable(data)
{
    $('#contactList').find("tr:gt(0)").remove();

    for (var i = 0; i < data.length; i++)
    {
        drawRow(data[i]);
    }
}

function drawRow(row)
{
    console.log(row);
    var r = $("<tr />");

    $('#contactList').append(r);

    console.log(row.name);

    r.append($("<td>" + row.name + "</td>"));
    r.append($("<td>" + row.phone + "</td>"));
    r.append($("<td>" + row.address + "</td>"));
    r.append($("<td>" + row.email + "</td>"));
    r.append($('<button/>', {
        text: 'Edit',
        id: row.contact_id,
        class: 'btnEdit'
    }));
    r.append($('<button/>', {
        text: 'Delete',
        id: "a" + row.contact_id,
        class: 'btnDelete'
    }));

    if (row.primary == 0)
    {
        r.append($('<button/>', {
            text: 'Make Primary',
            id: "p" + row.contact_id,
            class: 'btnPrimary'
        }));
    }
}
