// $(document).ready(function () {
//     httpGet("/connectionapproval", function (response) {
//         var i = 0;
//         var j = 0;
//         response.forEach(function (element) {
//             console.log(element.childrenprofile.full_name);
//             console.log(element.role);
//             $('#listofmemberss').append('<div class="cards-view"><div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button class="profile-card-btn" type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');
//             // $("#listofmemberss").load(childReviewForm.html);
//             var id = "#submit" + i;
//             $(id).click(function () {
//                 // window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
//                 var data = {};
//                 data.status = "true";
//                 data.id = element.id;
//                 data.profile_id = element.profile_id;
//                 httpPost("/changeapproval", data, function (response) {
//                     console.log(response);
//                 });

//             });
//             i++;
//             var id1 = "#submit1" + j;
//             $(id1).click(function () {
//                 // window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
//                 var data = {};
//                 data.status = "false";
//                 data.id = element.id;
//                 httpPost("/changeapproval", data, function (response) {
//                     console.log(response);
//                 });

//             });
//             j++;
//         }, this);
//     })
// });


$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {

        connectionDisplay("volunteer");

    }
});
function volunteerTab() {
    $('#firsttab').empty();
    var role = "volunteer";
    connectionDisplay(role);
}
function mentorTab() {
    $('#secondtab').empty();
    var role = "mentor";
    connectionDisplay(role);
}
function connectionDisplay(role) {
    //    $('#secondtab').empty();
    var data = {};
    if (role == "volunteer") {
        data.connectionOperation = "volunteer";
    }
    if (role == "mentor") {
        data.connectionOperation = "mentor";
    }
    console.log(data.connectionOperation);
    httpPost("/connectionapproval", data, function (response) {
        $(".loading").addClass("hide");
        
        var i = 0;
        var j = 0;
        var res_length = response.length;
        if (res_length == 0) {
            $(".no_record").removeClass("hide");
        }
        else {
            // if (data.connectionOperation = "volunteer") {

            response.forEach(function (element) {
                $(".loading").addClass("hide");
                if (element.role == 'volunteer') {
                    $('#firsttab').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button onclick="accept(' + element.id + "," + element.profile_id + "," + true + ",'" + element.role + '\')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button onclick="deny(' + element.id + "," + element.profile_id + "," + true + "," + element.childrenprofile.id + "," + element.role + ')" class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');
                }
                else {
                    $('#secondtab').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button onclick="accept(' + element.id + "," + element.profile_id + "," + true + ",'" + element.role + '\')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button onclick="deny(' + element.id + "," + element.profile_id + "," + true + "," + element.childrenprofile.id + "," + element.role + ')" class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');

                }
            }, this);
            // } else {

            // }
        }
    });

}


// function connectionDisplay() {
//     $('#firsttab').empty();
//     var data = {};
//    data.connectionOperation = "mentor";
//    httpPost("/connectionapproval", data, function (response) {
//        console.log("dadfddaffdfdfa"+response[0]);
//        $(".loading").addClass("hide");
//        var i = 0;
//        var j = 0;
//        var res_length = response.length;
//        if (res_length == 0) {
//            $(".no_record").removeClass("hide");
//        }
//        else {
//            response.forEach(function (element) {
//                console.log("checking of element",element.childrenprofile.id);
//                console.log(element.childrenprofile.full_name);
//                console.log(element.role);
//                console.log("childrenprofile id",element.childrenprofile.id);
//                $('#secondtab').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button onclick="accept(' + element.id + "," + element.profile_id + "," + true + ')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button onclick="deny(' + element.id + "," + element.profile_id + "," + true +","+ element.childrenprofile.id +')" class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');
//                // console.log(" chekfljddddljkfddjlfdjfdjkfjkdjkfkjdkjfdkl;f"+JSON.stringify(temp));
//            }, this);
//        }
//    });

// }
// function connectionDisplay() {
//     httpGet("/connectionapproval", function (response) {
//         $(".loading").addClass("hide");
//         var i = 0;
//         var j = 0;
//         var res_length = response.length;
//         if (res_length == 0) {
//             $(".no_record").removeClass("hide");
//         }
//         else {
//             response.forEach(function (element) {
//                 $("#listofmemberss").removeClass("hide");
//                 console.log(element.childrenprofile.full_name);
//                 console.log(element.role);
//                 $('#listofmemberss').append('<div class="cards-view"><div class="profile-card  col-xs-6 col-sm-3 col-md-3 col-lg-3"><div><table class="table"><tr><td>' + element.childrenprofile.full_name + '</td><td>' + element.profile.name + '</td></tr><tr><td>children</td><td>' + element.role + '</td></tr></table></div><div class="col-xs-6 col-sm-6"><button onclick="accept(' + element.id + "," + element.profile_id + "," + true + ')"class="profile-card-btn accept-button " type="submit" id="submit' + i + '">Accept</button></div><div class="col-sm-6 col-xs-6"><button onclick="deny(' + element.id + "," + element.profile_id + "," + true + "," + element.childrenprofile.id+')" class="profile-card-btn" type="submit" id="submit1' + i + '">Deny</button></div></div></div>');

//             }, this);
//         }
//     });

// }

// window.location.href = "../../../../shared/viewvolunteerprofile/en/viewvolunteerprofile.html?id:" + element.id;
function accept(elementId, elementPrfileId, elementStatus, elementRole) {
    console.log("aiee");
    var data = {};
    data.status = elementStatus;
    var role = elementRole;

    console.log("inside accept", role);
    data.id = elementId;
    data.profile_id = elementPrfileId;
    data.time = new Date();
    httpPost("/changeapproval", data, function (response) {
        console.log(response);
        if (response != null) {
            if (elementRole == 'volunteer') {
                $('#firsttab').empty();

            }
            else {
                $('#secondtab').empty();

            }

            connectionDisplay(elementRole);
        }
    });
}

// function deny(elementId, elementPrfileId, elementStatus, elementchildrenprofileid) {
//     var data = {};
//     data.status = elementStatus;
//     data.id = elementId;
//     data.profile_id = elementPrfileId;
//     data.time = new Date();
//     data.childrenprofileid = elementchildrenprofileid;
//     httpPost("/denyapprovalconnection", data, function (response) {
//         console.log(response);
//         if (response != null) {
//             $('#listofmemberss').empty();
//             connectionDisplay();
//         }
//     });

// }