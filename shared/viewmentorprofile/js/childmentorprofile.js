$(document).ready(function () {
    var data = {};
    data.id = localStorage.getItem("user");
    httpPost("/viewchildvolunteer", data, function (response) {
        // if ((response[0] && response[1]) == null) {
        //     $('#mentor_record').modal();
        // }
        if (response[0].profile.role == "mentor") {
            $('#profileimage').append('<img src="http://localhost:3406/uploads/mentor/photo/' + response[0].profile.profileinfo.photo + '" width="150" height="150">');
            $('#name').html(response[0].profile.name);
            $('#role').html(response[0].profile.role);
            $('#dob').html(response[0].profile.dob);
            $('#age').html(response[0].profile.age);
            $('#gender').html(response[0].profile.gender);
            $('#address_line1').html(response[0].profile.address_line1);
            $('#address_line2').html(response[0].profile.address_line2);
            $('#city').html(response[0].profile.city);
            $('#email_id').html(response[0].profile.email_id);
            $('#state').html(response[0].profile.state);
            $('#country').html(response[0].profile.country);
            $('#postal_code').html(response[0].profile.postal_code);
            $('#mobile_no').html(response[0].profile.mobile_no);
            $('#phone').html(response[0].profile.phone);
            $('#work_type').html(response[0].profile.profileinfo.work_type);
            $('#course').html(response[0].profile.profileinfo.course);
            $('#department').html(response[0].profile.profileinfo.department);
            $('#institution').html(response[0].profile.profileinfo.institution);
            $('#reference').html(response[0].profile.profileinfo.reference);
            $('#commitment').html(response[0].profile.profileinfo.commitment);
            if (response[0].profile.profileinfo.designation == "") {
                $('#designationrow').hide();
            }
            else {
                $('#designationrow').show();
                $('#designation').html(response[0].profile.profileinfo.designation);
            }
            if (response[0].profile.profileinfo.organization == "") {
                $('#organizationrow').hide();
            }
            else {
                $('#organizationrow').show();
                $('#organization').html(response[0].profile.profileinfo.organization);
            }
            if (response[0].profile.profileinfo.area_of_expertise == "") {
                $('#area_of_expertiserow').hide();
            }
            else {
                $('#area_of_expertiserow').show();
                $('#area_of_expertise').html(response[0].profile.profileinfo.area_of_expertise);
            }
            if (response[0].profile.profileinfo.experience == "") {
                $('#experiencerow').hide();
            }
            else {
                $('#experiencerow').show();
                $('#experience').html(response[0].profile.profileinfo.experience);
            }
        }
        else {
            $('#profileimage').append('<img src="http://localhost:3406/uploads/mentor/photo/' + response[1].profile.profileinfo.photo + '" width="150" height="150">');
            $('#name').html(response[1].profile.name);
            $('#role').html(response[1].profile.role);
            $('#dob').html(response[1].profile.dob);
            $('#age').html(response[1].profile.age);
            $('#gender').html(response[1].profile.gender);
            $('#address_line0').html(response[1].profile.address_line0);
            $('#address_line2').html(response[1].profile.address_line2);
            $('#city').html(response[1].profile.city);
            $('#email_id').html(response[1].profile.email_id);
            $('#state').html(response[1].profile.state);
            $('#country').html(response[1].profile.country);
            $('#postal_code').html(response[1].profile.postal_code);
            $('#mobile_no').html(response[1].profile.mobile_no);
            $('#phone').html(response[1].profile.phone);
            $('#work_type').html(response[1].profile.profileinfo.work_type);
            $('#course').html(response[1].profile.profileinfo.course);
            $('#department').html(response[1].profile.profileinfo.department);
            $('#institution').html(response[1].profile.profileinfo.institution);
            $('#reference').html(response[1].profile.profileinfo.reference);
            $('#commitment').html(response[1].profile.profileinfo.commitment);
            if (response[1].profile.profileinfo.designation == "") {
                $('#designationrow').hide();
            }
            else {
                $('#designationrow').show();
                $('#designation').html(response[1].profile.profileinfo.designation);
            }
            if (response[1].profile.profileinfo.organization == "") {
                $('#organizationrow').hide();
            }
            else {
                $('#organizationrow').show();
                $('#organization').html(response[1].profile.profileinfo.organization);
            }
            if (response[1].profile.profileinfo.area_of_expertise == "") {
                $('#area_of_expertiserow').hide();
            }
            else {
                $('#area_of_expertiserow').show();
                $('#area_of_expertise').html(response[1].profile.profileinfo.area_of_expertise);
            }
            if (response[1].profile.profileinfo.experience == "") {
                $('#experiencerow').hide();
            }
            else {
                $('#experiencerow').show();
                $('#experience').html(response[1].profile.profileinfo.experience);
            }
        }


    });
});

