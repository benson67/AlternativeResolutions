/**
 * Created by ShouldNotBe on 11/29/2015.
 */


$(document).ready(function() {


    var type;
    var subtype;

    // Load and populate the fields
    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/pullService.php',
        //dataType: "json",
        data: {},

        success: function (data) {
            if (data === "error")
            {
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/staffManageRequests.html";
            }

            console.log(data);
            var d = jQuery.parseJSON(data);

            type = d.type;
            subtype = d.subtype;
            $('#txtDate').val(d.startDate);
            $('#txtLength').val(d.duration);
            $('#txtLocation').val(d.location);
            $('#txtFees').val(d.fee);

        },
        error: function(e)
        {

        }
    });


    $.ajax({
        type: 'POST',
        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getServiceOptions.php',
        //dataType: "json",
        data: {},

        success: function (data) {

            console.log(data);
            var d = jQuery.parseJSON(data);


            for (var i = 0; i < d.length; i++)
            {
                var item = d[i];
                $('#selType').append($("<option></option>").val(item.id).html(item.name));
                if (item.id === type)
                {
                    $('#selType').val(item.id);
                    $.ajax({
                        type: 'POST',
                        url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getSubTypes.php',
                        data: {id: $('#selType').val()},

                        success: function (data) {

                            console.log(data);
                            var d = jQuery.parseJSON(data);


                            for (var i = 0; i < d.length; i++)
                            {
                                var item = d[i];
                                $('#selSubtype').append($("<option></option>").val(item.id).html(item.type));
                                if (item.id === subtype)
                                {
                                    $('#selSubtype').val(item.id);
                                }
                            }

                            $('#selSubtype').prop('disabled', false);

                        },
                        error: function(e)
                        {

                        }
                    });
                }
            }



        },
        error: function(e)
        {

        }
    });









    $('#selType').change(function()
    {

        $('#selSubtype').find("option:gt(0)").remove();

        if ($('#selType').val() != "default")
        {
            $.ajax({
                type: 'POST',
                url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/getSubTypes.php',
                data: {id: $('#selType').val()},

                success: function (data) {

                    console.log(data);
                    var d = jQuery.parseJSON(data);


                    for (var i = 0; i < d.length; i++)
                    {
                        var item = d[i];
                        $('#selSubtype').append($("<option></option>").val(item.id).html(item.type));
                    }

                    $('#selSubtype').prop('disabled', false);

                },
                error: function(e)
                {

                }
            });
        }
        else
        {
            $('#selSubtype').prop('disabled', true);
        }




    });

    $('#btnSchedule').click(function () {

        var ok = confirm("Scheduling this event will lock it for editing without admin approval.\nAre you sure you wish to schedule?")

        if (ok == true)
        {
            typ = $('#selType').val();
            subType = $('#selSubtype').val();
            date = $('#txtDate').val();
            days = $('#txtLength').val();
            loc = $('#txtLocation').val();
            fee = $('#txtFees').val();

            $.ajax({
                type: 'POST',
                url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/updateAndSchedule.php',
                data: {type: typ, subtype: subType, date: date, duration: days, location: loc, fee: fee},

                success: function (data) {
                    alert("Request Updated and Scheduled");
                    window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/staffManageRequests.html"
                },
                error: function(e)
                {

                }
            });
        }

    });


    $('#btnUpdate').click(function () {

        typ = $('#selType').val();
        subType = $('#selSubtype').val();
        date = $('#txtDate').val();
        days = $('#txtLength').val();
        loc = $('#txtLocation').val();
        fee = $('#txtFees').val();

        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/updateServiceStaff.php',
            data: {type: typ, subtype: subType, date: date, duration: days, location: loc, fee: fee},

            success: function (data) {
                alert("Request Updated");
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/staffManageRequests.html"
            },
            error: function(e)
            {

            }
        });


    });
});