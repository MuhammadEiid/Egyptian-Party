
// Side bar
$(".sideBarBox i").click(function(){

    let sBLeft =  $(".sideBarBox").css("left");
    let ulWidth =  $(".navBar").outerWidth()

    if(  sBLeft == "0px" )
    {
        // hide
         $(".sideBarBox").animate({left : `-${ulWidth}`} , 1000)
    }
    else
    {
        // show
        $(".sideBarBox").animate({left : `0px`} , 1000)
    }
})


// Singers part
$("#singers h3").click(function () {
    $(this).next().slideToggle(500);
    $("#singers div").not($(this).next()).slideUp(500);

});




// Contact Word Count
$(function () {
    let maxChar = 100;

    $("textarea").keyup(function () {
        let charLength = $(this).val().length;
        let character = maxChar - charLength;

        if (character <= 0) {
            // Setting Text
            $("#char").text("You have exceeded the limited characters");
        } else {
            // Getting Text
            $("#char").text(character);
        }
    });
});



// Event Count down
function eventCountDown() {
    let today = new Date();
    let eventDate = new Date(2022, 7, 28);

    // getTime returns time in milliseconds
    let currentTime = today.getTime();
    let eventTime = eventDate.getTime();

    let reminderTime = eventTime - currentTime;

    // To convert milliseconds to seconds must be divided by 1000
    let seconds = Math.floor(reminderTime / 1000);

    let minutes = (Math.floor(seconds / 60));
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24) - 30;

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $('#days').html(`<h3> ${days} Days</h3>`);
    $('#hours').html(`<h3> ${hours} Hours</h3>`);
    $('#minutes').html(`<h3> ${minutes} Minutes</h3>`);
    $('#seconds').html(`<h3> ${seconds} Seconds</h3>`);

    setTimeout(eventCountDown, 1000);
}

eventCountDown();

