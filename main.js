$(document).ready(function() {

    $('#start').click(function() {

        let delay = $('#timer').val();
        let clearAfter = $('#hideDelay').val();
        Alarm.start(delay, clearAfter);
        $('#textarea').val('Started ...').css('font-size', '30px');
    });

    $('#stop').click(function() {
        let clearVal = $('#hideDelay').val();
        $('#textarea').val('Ended!!!').css('font-size', '30px');
        Alarm.timer = clearVal;
        Alarm.stop(clearVal);
    });

    let Alarm = {
        timer: null,

        start: function(delay, clearAfter) {
            console.log('Before Starting Interval');
            Alarm.timer = setInterval(function() {
                console.log("Interval Started");
                $('#textarea').val('Timer called');

                setTimeout(() => {
                    $('#textarea').val('');
                }, clearAfter * 1000);

            }, delay * 1000);

        },

        stop: function(clearAt) {
            console.log('Alarm Stop');
            clearInterval();
        },

    }





    $('#stop').click(function() {
        Alarm.stop();
    });
});