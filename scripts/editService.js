/**
 * Created by petert77 on 11/27/15.
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
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/contactList.html";
            }

            console.log(data);
            var d = jQuery.parseJSON(data);

            type = d.type;
            subtype = d.subtype;
            $('#txtDate').val(d.startDate);
            $('#txtLength').val(d.duration);
            $('#txtLocation').val(d.location);

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


    $('#btnUpdate').click(function () {

        typ = $('#selType').val();
        subType = $('#selSubtype').val();
        date = $('#txtDate').val();
        days = $('#txtLength').val();
        loc = $('#txtLocation').val();


        $.ajax({
            type: 'POST',
            url: 'http://webdev.cs.uwosh.edu/students/petert77/team6/scripts/php/updateService.php',
            data: {type: typ, subtype: subType, date: date, duration: days, location: loc},

            success: function (data) {
                alert("Request Updated");
                window.location = "http://webdev.cs.uwosh.edu/students/petert77/team6/userServiceList.html"
            },
            error: function(e)
            {

            }
        });


    });
});