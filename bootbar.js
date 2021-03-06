

bootbar= {


    info: function (message, options) {
        options = options === undefined ? {} : options;
        options.barType = "info";
        this.show(message, options);
    }
,
    warning: function (message, options) {
        options = options === undefined ? {} : options;
        options.barType = "warning";
        this.show(message, options);
    }
,
    danger: function (message, options) {
        options = options === undefined ? {} : options;
        options.barType = "danger";
        this.show(message, options);
    }
,
    danger2: function (message, options) {
        options = options === undefined ? {} : options;
        options.barType = "danger2";
        this.show(message, options);
    }
,
    success: function (message, options) {
        options = options === undefined ? {} : options;
        options.barType = "success";
        this.show(message, options);
    }
,

    show: function (message, options) {
        var alertTypes = ["info", "warning", "danger", "success","danger2"];

        var defaults = {
            autoDismiss: false,      // Don't automatically dismiss the bar.
            autoLinkClass: true,     // onDraw callback
            barType: alertTypes[0],  // info
            dismissTimeout: 3000,    // 3 Seconds
            dismissEffect: "slide",  // Slide away: (slide, fade)
            dismissSpeed: "fast",    // Dismiss speed: (slow, fast)
            onDraw: null,            // onDraw callback
            onDismiss: null          // onDismiss callback
        };

        var settings = $.extend({}, defaults, options || {});

        var template=$("<div class=\"bootbar-container alert alert-dismissable alert-messages\">" +
            "<button type=\"button\" class=\"close close-bootbar\" aria-hidden=\"true\">&times;</button>" +
            "</div>");

        function triggerClick() {
            $(template).find(".close-bootbar").trigger("click");
        }

        template.addClass("alert-" + settings.barType);
        template.append(message);

        if (settings.autoLinkClass) {
            template.find("a").addClass("alert-link");
        }



        if($(".bootbar-container").length<1)
        {
            $("body").prepend(template).each(function () {
                if ($.isFunction(settings.onDraw)) {
                    settings.onDraw.call(this);
                }
            });

            if (settings.autoDismiss) {
                setTimeout(triggerClick, settings.dismissTimeout);
            }

            $(template).find(".close-bootbar").unbind("click");

            $(template.find(".close-bootbar")).on("click", function () {
                if (settings.dismissEffect === "slide") {
                    $(template).slideUp(settings.dismissSpeed, function () {
                        $(template).remove();
                        if ($.isFunction(settings.onDismiss)) {
                            settings.onDismiss.call(this);
                        }
                    });
                } else {
                    $(template).fadeOut(settings.dismissSpeed, function () {
                        $(template).remove();
                        if ($.isFunction(settings.onDismiss)) {
                            settings.onDismiss.call(this);
                        }
                    });
                }
            });
        }
    }
};
