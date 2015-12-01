/**
 * Created by ShouldNotBe on 11/28/2015.
 */

$(document).ready(function() {
    contactLoad();
    scheduledLoad();
    requestLoad();
});

function contactLoad()
{
    var contactID;

    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/pullPrimaryContact.php',
        data: {},

        success: function (data) {
            var d = jQuery.parseJSON(data);

            $('#lblContactName').text(d.name);
            $('#lblContactAddress').text(d.address);
            $('#lblContactPhone').text(d.phone);
            $('#lblContactEmail').text(d.email);
            contactID = d.contact_id;
        },
        error: function(e)
        {

        }
    });

    $('#btnContactEdit').click(function () {
        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/sessionContact.php',
            data: {id: contactID},

            success: function () {
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/editContact.html";
            },
            error: function(e)
            {

            }
        });

    });

    $('#btnContactList').click(function () {
        window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/contactList.html";
    });
}

function scheduledLoad()
{
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllScheduledServices.php',
        data: {},
        dataType: "json",
        success: function (data) {
            if (data === "error") {

            }
            else {
                createTable(data);
            }
        },
        error: function(e)
        {

        }
    });




}

function requestLoad()
{
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllServices.php',
        data: {},
        dataType: "json",
        success: function (data) {
            if (data === "error") {

            }
            else {
                createReqTable(data);
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

                $('.btnNotes').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/sessionService.php',
                        data: {id: this.id.substring(1)},

                        success: function () {
                            window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/clientServiceNotes.html";
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
                        data: {id: this.id.substring(1)},

                        success: function (data) {
                            requestLoad();
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

function createReqTable(data)
{
    $('#requestList').find("tr:gt(0)").remove();

    for (var i = 0; i < data.length; i++)
    {
        drawReqRow(data[i]);
    }
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
        text: 'Notes',
        id: "s" + row.service_id,
        class: 'btnNotes'
    }));
}

function drawReqRow(row)
{
    console.log(row);
    var r = $("<tr />");

    $('#requestList').append(r);

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
        text: 'Notes',
        id: "n" + row.service_id,
        class: 'btnNotes'
    }));
    r.append($('<button/>', {
        text: 'Delete',
        id: "a" + row.service_id,
        class: 'btnDelete'
    }));

}