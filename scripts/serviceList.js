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
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllServices.php',
        data: {},
        dataType: "json",
        success: function (data) {
            if (data === "error") {
                alert("Error fetching service data");
            }
            else {
                createTable(data);
                // Set up the event handler for these buttons.
                $('.btnEdit').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/sessionService.php',
                        data: {id: this.id},

                        success: function () {
                            window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/editService.html";
                        },
                        error: function(e)
                        {

                        }
                    });

                });

                $('.btnDelete').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/deleteService.php',
                        data: {service_id: this.id.substring(1)},

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

    $('#btnRequestService').click(function () {
        window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/requestService.html"
    });
}

function createTable(data)
{
    $('#serviceList').find("tr:gt(0)").remove();

    for (var i = 0; i < data.length; i++)
    {
        drawRow(data[i]);
    }
}

function drawRow(row)
{
    console.log(row);
    var r = $("<tr />");

    $('#serviceList').append(r);

    console.log(row.name);

    r.append($("<td>" + row.type + "</td>"));
    r.append($("<td>" + row.subtype + "</td>"));
    r.append($("<td>" + row.startDate + "</td>"));
    r.append($("<td>" + row.duration + "</td>"));
    r.append($("<td>" + row.fee + "</td>"));
    r.append($("<td>" + row.location + "</td>"));
    r.append($('<button/>', {
        text: 'Edit',
        id: row.service_id,
        class: 'btnEdit'
    }));
    r.append($('<button/>', {
        text: 'Delete',
        id: "a" + row.service_id,
        class: 'btnDelete'
    }));

}
