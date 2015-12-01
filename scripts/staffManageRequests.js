/**
 * Created by ShouldNotBe on 11/29/2015.
 */

$(document).ready(function() {
    scheduledLoad();
    requestLoad();
});

function scheduledLoad()
{
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllScheduledServicesStaff.php',
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
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getAllServicesStaff.php',
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
                            window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/staffEditServices.html";
                        },
                        error: function(e)
                        {

                        }
                    });

                });

                $('.btnSchedule').click(function () {

                    var ok = confirm("Scheduling this event will lock it for editing without admin approval.\nAre you sure you wish to schedule?")

                    if (ok == true)
                    {
                        $.ajax({
                            type: 'POST',
                            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/scheduleService.php',
                            data: {id: this.id.substring(1)},

                            success: function (data) {
                                scheduledLoad();
                                requestLoad();
                            },
                            error: function(e)
                            {

                            }
                        });
                    }




                });

                $('.btnDelete').click(function () {

                    var ok = confirm("Rejecting this event will delete it, and any associated notes completely.\nAre you sure you wish to delete?")

                    if (ok == true)
                    {
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
                    }

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

    r.append($("<td>" + row.name + "</td>"));
    r.append($("<td>" + row.type + "</td>"));
    r.append($("<td>" + row.subtype + "</td>"));
    r.append($("<td>" + row.startDate + "</td>"));
    r.append($("<td>" + row.duration + "</td>"));
    r.append($("<td>" + row.fee + "</td>"));
    r.append($("<td>" + row.location + "</td>"));

}

function drawReqRow(row)
{
    console.log(row);
    var r = $("<tr />");

    $('#requestList').append(r);

    console.log(row.name);

    r.append($("<td>" + row.name + "</td>"));
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
        text: 'Schedule',
        id: "s" + row.service_id,
        class: 'btnSchedule'
    }));
    r.append($('<button/>', {
        text: 'Reject',
        id: "a" + row.service_id,
        class: 'btnDelete'
    }));

}