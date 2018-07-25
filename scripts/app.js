console.log("APP LOADED SUCCESFULLY!");
(function(){
    var app = angular.module("UserModule", []);
    app.controller("UserController", function($scope){
        $scope.helloMsg = "Hello World!";
        $scope.user = user;
        $scope.moreInfo = function(user){
            alert(user.firstName + " is working with " + user.company + "!");
        }
    })
})();

// Model
user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1965"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    image : "./assets/images/users_images/bill.jpg",
    vote : 120
}