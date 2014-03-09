angular.module('demo', [
    'ui.bootstrap',
    'ui-templates'
]);

function AlertDemoCtrl($scope) {
    $scope.alerts = [{
        type: 'danger',
        msg: 'Please try again!'
    }, {
        type: 'success',
        msg: 'Success!'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: "Another alert!"
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}

var RatingDemoCtrl = function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

};