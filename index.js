        // time
        var countdown = new Date("January 1, 2022 18:00:00 GMT+00:00").getTime();
        // make sure it runs every sec
        var updater = setInterval(function () {
            var now = new Date().getTime();
            var time_left = countdown - now;
            // calculate the time left
            var days = Math.floor(time_left / (1000 * 60 * 60 * 24));
            var hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((time_left % (1000 * 60)) / 1000);
            // output the results
            document.getElementById("days").innerHTML = days + " days "
            document.getElementById("hours").innerHTML = hours + " hours "
            document.getElementById("minutes").innerHTML = minutes + " minutes "
            document.getElementById("seconds").innerHTML = seconds + " seconds "
            // carepackage when countdown is over
            if (time_left < 0) {
                clearInterval(updater);
                document.getElementById("days").innerHTML = ""
                document.getElementById("hours").innerHTML = ""
                document.getElementById("minutes").innerHTML = ""
                document.getElementById("seconds").innerHTML = ""
                document.getElementById("carepack").innerHTML = "-1293 293";
                document.getElementById("when").innerHTML = "";
                document.getElementById("done").innerHTML = "The care-package has been dropped! You can find it at:";
            }
        }, 1000);