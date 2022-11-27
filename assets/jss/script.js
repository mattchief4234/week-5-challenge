$(document).ready(function () {
    var displayTime = $('#time')
    //show the current time of day.
    function realtime() {
        let time = moment().format('h:mm:ss a');
        document.getElementById('time').innerHTML = time;

        setInterval(() => {
            time = moment().format('h:mm:ss a');
            document.getElementById('time').innerHTML = time;
            }, 1000)
    };

    realtime();

    $(".save-btn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);

    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
 $(".time-stamp").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
     console.log( blockHour, currentHour)

//check if we've moved past this time
    if (blockHour < currentHour) {
        $(this).addClass("past");
         $(this).removeClass("future");
          $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
             $(this).removeClass("past");
             $(this).addClass("present");
             $(this).removeClass("future");
         }
        else {
            $(this).removeClass("present");
             $(this).removeClass("past");
             $(this).addClass("future");
         }
        })
    }
    hourTracker();
})