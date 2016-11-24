/**
 * Created by guminji on 2016/11/10 0010.
 */

var app = angular.module('app',['HDhttp']);
app.controller('test',['$scope','native','httpMethod',function($scope,native,httpMethod){
    $scope.showMessage ='hello world';
    $scope.showPage =function(){
        native.showPage($scope.showMessage);
    }
    $scope.getHttp =function(){
        console.log(httpMethod());
        httpMethod().then(function(res){
            console.log(res);
        },
        function(res){
            console.log(res);
        }
        ).then(
            function(){
                console.log('promise chain!');
            },function(){
                console.log('cant load promise chain!')
            }
        );
    }
}])
//module.exports = app;
var cookies = angular.module('cookies',[]);
cookies.factory('getCookies',['native',function(native){
    return native;
}])