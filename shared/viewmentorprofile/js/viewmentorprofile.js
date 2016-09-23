$(document).ready(function () {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf(':') + 1);
    var data = {};
    data.id = id;
    httpPost("/viewmentor", data, function (response) {
        $('#name').html(response.profile[0].name);
        $('#address').html(response.profile[0].state);
        $('#mobile_no').html(response.profile[0].mobile_no);
        $('#email_id').html(response.profile[0].email_id);
        $('#work_type').html(response.profileinfo[0].work_type);
        $('#reference').html(response.profileinfo[0].reference);
        $('#designation').html(response.profileinfo[0].designation);
        $('#organization').html(response.profileinfo[0].organization);
    });
});