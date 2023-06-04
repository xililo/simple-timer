(function ($) {
    $.fn.simpletimer = function (options) {
        var settings = $.extend(
            {
                timeLeft: 60,
                onComplete: function () { },
                dangerTime: 60,
                dangerColor: 'red',
            },
            options
        );

        var interval;
        var paused = false;
        var initialTime = settings.timeLeft;
        var dangerTime = settings.dangerTime;
        var dangerColor = settings.dangerColor;
        var currentTime = initialTime;

        function formatTime(seconds) {
            var days = Math.floor(seconds / (24 * 60 * 60));
            seconds -= days * 24 * 60 * 60;
            var hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60;
            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;
            return (
                (days ? days + 'd ' : '') +
                (hours ? hours + 'h ' : '') +
                (minutes ? minutes + 'm ' : '') +
                seconds + 's'
            );
        }

        function startCountdown($element) {
            interval = setInterval(function () {
                currentTime--;

                if (currentTime <= 0) {
                    clearInterval(interval);
                    settings.onComplete();
                } else if (currentTime < dangerTime) {
                    $element.css('color', dangerColor);
                }

                $element.text(formatTime(currentTime));
            }, 1000);
        }

        return this.each(function () {
            var $element = $(this);
            startCountdown($element);

            $.fn.simpletimer.pause = function () {
                clearInterval(interval);
                paused = true;
            };

            $.fn.simpletimer.resume = function () {
                if (paused) {
                    startCountdown($element);
                    paused = false;
                }
            };

            $.fn.simpletimer.stop = function () {
                clearInterval(interval);
                currentTime = initialTime;
                $element.text(formatTime(currentTime));
                $element.css('color', ''); // Reset color to default
            };

            $.fn.simpletimer.update = function (newSeconds) {
                clearInterval(interval);
                initialTime = newSeconds;
                currentTime = newSeconds;
                startCountdown($element);
            };
        });
    };
})(jQuery);
