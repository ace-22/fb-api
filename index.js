

let myFacebookToken;

$(document).ready(() => {
    $("a").hover(function(){
        $(".nav-link").addClass("style")

    })
    $("a").mouseout(function(){
        $(".nav-link").removeClass("style")

    })

    myFacebookToken = prompt("Please enter your Facebook Token:", "");

    if (myFacebookToken == null || myFacebookToken == "") {

        alert("No usr Token found");

    } else {

        getAllDetails();
        

    } 
    
}); 

     

let getAllDetails = () => {



    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'https://graph.facebook.com/me?fields=id,name,gender,languages,posts,feed{attachments,created_time,story,link},location,birthday,hometown,work,education,email,photos{picture},cover,picture.type(large)&access_token=' + myFacebookToken,
        
        success: (response) => {

            

            console.log(response);


            

            

            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');
            $("#name-22").append(response.name);
            $('#cover').css('background-image', 'url(' + response.cover.source + ')');
            $("#namez").append(response.name);
            $("#name").append(response.name);
            $("#name-2").append(response.feed.data[0].story);
            $('#pP-22').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');
            $('#pP-222').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');
            $("#message").append(response.feed.data[0].attachments.data[0].title);
            $("#time").append(response.feed.data[0].created_time);
            $("#urlu").append(response.feed.data[0].link);
            $("#content").html('<img src="'+ response.feed.data[0].attachments.data[0].media.image.src + '"class="img-fluid profileHeight"/>');
            $("#name-x").append(response.name);
            $("#name-123").append(response.name);
            $('#prp').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');
            $('#prpxx').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');
            $('#pPx').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');
            $("#name-2x").append(response.feed.data[2].story);
            $("#messagex").append(response.feed.data[2].attachments.data[0].title);
            
            $("#urlux").append(response.feed.data[2].link);
            $("#contentx").html('<img src="'+ response.feed.data[2].attachments.data[0].media.image.src + '"class="img-fluid profileHeight"/>');
            $("#gender").append(response.gender);
            $("#languages").append(response.languages[0].name);
            $("#languagesx").append(response.languages[1].name);
            $("#timex").append(response.feed.data[2].created_time);
            $("#location").append(response.location.name);
            $("#email").append(response.email);
            $("#from").append(response.hometown.name);
            $("#birthday").append(response.birthday);




        }, error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        }
           

    });


}