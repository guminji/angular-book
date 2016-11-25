/**
 * Created by guminji on 2016/11/24 0024.
 */
var HDhttp = angular.module('HDhttp',[]);
HDhttp.factory('httpMethod',function($http,$q){
    /*return function(){
        return $http.get('www.baidu.com')
            .then(
            function(res){

                console.log('get true message!');
            },function(res){
                console.log(res);
                console.log('cant get message!');
                if(res.status ==404){
                    console.log(1);
                    return $q.resolve('我还是成功了！')
                }
                //console.log('cant get message!');
                return $q.resolve('我还是成功了！')
            }
        )

    }*/
    return function(){
        return $http.get('www.baidu.com').then(
            function(res){

            }
            ,function(res){
                return res;
            }
        )
    }

})