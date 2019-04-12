function expandOnFocus() {
    return {

        restrict: "A",
        link: function($scope, $element, $attrs) {

                let height;

                $element.on("focus", () => {
                $element.css("height", height+"px");
                });

                $element.on("blur", () => {
                $element.css("height", "");
                });

                //Used to watch for changes in the count
                $scope.$watch($attrs.count, function(value) {
                    height = value;
                    console.log(value);
                });

        }
    }
}

angular.module("upDownApp").directive("expandOnFocus", expandOnFocus) 

