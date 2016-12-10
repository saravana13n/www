$(document).ready(function () {
    httpGet("/listofvolunteer", function (response) {
        var i = 0;
        response.forEach(function (element) {
            console.log(element);
            console.log(element.profileinfo.photo);
            $('#listofmembers').append('<div class="cards-view"> <div class="profile-card col-xs-6 col-sm-3 col-md-3 col-lg-3"> <div>  <img src="'+BASEURL+'/uploads/volunteer/photo/' + element.profileinfo.photo + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.name + '</h4> <h5 class="profile-card-title">' + element.email_id + '</h5>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="submit' + i + '">ViewProfile</button> </div></div>');
            var id = "#submit" + i;
            $(id).click(function () {
                window.location.href = "../../viewadminvolunteerprofile/en/viewadminvolunteerprofile.html?id:" + element.id;
            });
            i++;
        }, this);
    })
})