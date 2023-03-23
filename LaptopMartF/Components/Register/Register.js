app.controller("registerCtrl",function($scope,$http,$location,$window){
    $scope.email=null;
    $scope.password=null;

    $scope.login=function(fullname,email,mobile,password,role){
        var data={
            fullname:fullname,
            email:email,
            mobile:mobile,
            password:password,
            role:role
        }
        //call the service
        $http.post("https://localhost:44386/api/User/Register",JSON.stringify(data))
        .then(function(response){
            console.log(response);
            if(response){
                $location.path('/Login');
            }
        },function(error){
            console.log(error)
        })
    };
})