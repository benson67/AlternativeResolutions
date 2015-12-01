/**
 * Created by ShouldNotBe on 11/30/2015.
 */

var username;

$(document).ready(function() {

    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/checkLogin.php',
        data: {},

        success: function (data) {

            username = data;
        },
        error: function(e)
        {

        }
    });



    pageLoad();
});


function pageLoad()
{

    $('#btnAddNote').click(function () {


        note = $('#txtNote').val();

        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/createNoteForService.php',
            data: {content: note, private: "0"},

            success: function (data) {
                if (data === "error") {
                    alert("Note could not be added, please reload this page and try again.");
                }
                else {
                    $('#txtNote').val('');
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
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllNotesForServiceAsClient.php',
        data: {},
        dataType: "json",
        success: function (data) {
            if (data === "error") {
                alert("Error fetching note data");
            }
            else {
                createTable(data);
                $('.btnDelete').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/deleteNoteForService.php',
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
            console.log(e);
        }
    });

}

function createTable(data)
{
    $('#noteList').find("tr:gt(0)").remove();

    for (var i = 0; i < data.length; i++)
    {
        drawRow(data[i]);
    }
}

function drawRow(row)
{
    console.log(row);
    var r = $("<tr />");

    $('#noteList').append(r);

    r.append($("<td>" + row.user_name + "</td>"));
    r.append($("<td>" + row.note + "</td>"));

    if (row.user_id = username)
    {
        r.append($('<button/>', {
            text: 'Delete',
            id: row.note_id,
            class: 'btnDelete'
        }));
    }
}