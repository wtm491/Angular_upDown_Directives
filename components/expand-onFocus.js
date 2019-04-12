function expandOnFocus() {
    return {

        restrict: "A",
        link: function($scope, $element, $attrs) {

                $element.on("focus", () => {
                $element.css("height", "50px");
                });

                $element.on("blur", () => {
                $element.css("height", "");
                });

    }
}
}

angular.module("upDownApp").directive("expandOnFocus", expandOnFocus) 