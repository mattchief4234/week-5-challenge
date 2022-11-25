var displayTime = $('#display-time')
//show the current time of day.
function realtime() {
    let time = moment().format('h:mm:ss a');
    document.getElementById('time').innerHTML = time;

    setInterval(() => {
        time = moment().format('h:mm:ss a');
        document.getElementById('time').innerHTML = time;
        }, 1000)
}; !improtant;

realtime(); !important;
