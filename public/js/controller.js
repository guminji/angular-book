/**
 * Created by guminji on 2016/11/10 0010.
 */

var app = angular.module('app',[]);
app.controller('test',['$scope','native',function($scope,native,getCookies){
    $scope.showMessage ='hello world';
    $scope.showPage =function(){
        native.showPage($scope.showMessage);
    }
}])
//module.exports = app;
var cookies = angular.module('cookies',[]);
cookies.factory('getCookies',['native',function(native){
    return native;
}])