(function(){
    angular.module("ServiceDemoModule", [])
        .config(function(DemoConstant){
            console.log("Demo Constant Name : " + DemoConstant.companyName);
            // console.log("Deom Value Number : " + DemoValue.companyName);
            // console.log($provider.provide("DemoProvider"));
            // console.log("Factory Magic Number : " + DemoFactory.MAGIC_NUMBER);
            // console.log("DataService MAgic Number : " + DataService.MAGIC_NUMBER);
        })
        .run(function(DemoFactory, DataService){
            DataService.getUserData();
            console.log("Factory Magic Number : " + DemoFactory.MAGIC_NUMBER);
            console.log("DataService MAgic Number : " + DataService.MAGIC_NUMBER);
        })
        .controller("ServiceDemoController", function($scope, DemoFactory, DataService, DemoValue, DemoConstant){
            $scope.magicNumber = DemoFactory.MAGIC_NUMBER;
            $scope.serviceMagicNumber = DataService.MAGIC_NUMBER;
            $scope.valueCompanyName = DemoValue.companyName;
            $scope.constantCompanyName = DemoConstant.companyName;

        })
        .factory("DemoFactory", function(){
            return {
                MAGIC_NUMBER : Math.round(Math.random()*10),
                getUserData : function(){
                    return users;
                }
            }
        })
        .service("DataService", function($http, $q){
            this.MAGIC_NUMBER = Math.round(Math.random()*10);
            this.getApiUserData = function(){
                var deferred = $q.defer();
                $http({
                    url : "./model/user-data.json",
                    method : "GET"
                }).then(function(response){
                    deferred.resolve(response.data.users);
                }, function(response){
                    console.log(response);
                    deferred.reject(response);
                })
                return deferred.promise;
            }
            this.getUserData = function(){
                return  $http({
                        url : "./model/user-data.json",
                        method : "GET"
                    })
                // var users = [];
                // $http({
                //     url : "./model/user-data.json",
                //     method : "GET"
                // }).then(function(response){
                //         console.log(response.data.users);
                //         users = response.data.users;
                //     }, function(response){
                //         console.log(response);
                //     }).catch(function(err){
                //         console.log(err);
                //     })
                //     console.log("USERS -- ", users);
                //     return users;
                }
        })
        .provider("DemoProvider", {
            $get : function(){
                return {
                    MAGIC_NUMBER : Math.round(Math.random()*10),
                    getUserData : function(){
                        return users;
                    }
                }
            }
        })
        .value("DemoValue", {companyName : "Capgemini"})
        .constant("DemoConstant", {companyName : "Capgemini India"})
})();

users = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1965"),
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    image: "./assets/images/users_images/bill.jpg",
    vote: 120,
    reviews: [{
        stars: 5,
        body: "I like Mr. Bill",
        author: "abc@test.com"
    },{
        stars: 3,
        body: "Great job Mr. Bill!",
        author: "pqr@test.com"
    }
    ]
},
{
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date("Jan 2, 1965"),
    income: 0,
    isWorking: false,
    company: "Apple",
    image: "./assets/images/users_images/steve.png",
    vote: 100,
    reviews: [{
        stars: 5,
        body: "I like Mr. Steve",
        author: "abc@test.com"
    },{
        stars: 3,
        body: "Great job Mr. Steve!",
        author: "pqr@test.com"
    }
    ]
},{
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Aug 1, 1965"),
    income: 40000,
    isWorking: true,
    company: "World Wide Web",
    image: "./assets/images/users_images/tim.jpg",
    vote: 180,
    reviews: [{
        stars: 5,
        body: "I like Mr. Tim",
        author: "abc@test.com"
    },{
        stars: 3,
        body: "Great job Mr. Tim!",
        author: "pqr@test.com"
    }
    ]
}]