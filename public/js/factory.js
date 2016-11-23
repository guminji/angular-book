/**
 * Created by guminji on 2016/11/10 0010.
 */

app.factory('native',[function(){
    var count  =1;
    var native = {};
    native.showPage =function(){
        count++
        alert(count);
    }
    return native;
}])