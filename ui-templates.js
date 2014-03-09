angular.module('ui-templates', ['template/alert/alert.html', 'template/rating/rating.html']);

angular.module("template/alert/alert.html", []).run(["$templateCache",
    function($templateCache) {
        $templateCache.put("template/alert/alert.html",
            "<div class=\"alert\" ng-class=\"{'alert-{{type || 'warning'}}': true, 'alert-dismissable': closeable}\" role=\"alert\">\n" +
            "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close()\">\n" +
            "        <span aria-hidden=\"true\">&times;</span>\n" +
            "        <span>Close</span>\n" +
            "    </button>\n" +
            "    <div ng-transclude></div>\n" +
            "</div>");
    }
]);

angular.module("template/rating/rating.html", []).run(["$templateCache",
    function($templateCache) {
        $templateCache.put("template/rating/rating.html",
            "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
            "    <i ng-repeat=\"r in range track by $index\" ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-ok-sign') || (r.stateOff || 'glyphicon-ok-circle')\">\n" +
            "        <span class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
            "    </i>\n" +
            "</span>");
    }
]);