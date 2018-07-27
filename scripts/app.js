console.log("APP LOADED SUCCESFULLY!");
(function () {
    var app = angular.module("UserModule", ["ProductModule", "DirectiveDemoModule", 
                                        "FilterDemoModule","ServiceDemoModule"]);
    app.controller("RedController", function($scope, $rootScope){
        $scope.color = "RED";
        $rootScope.rootColor = "BLUE";
    });
    app.controller("GreenController", function($scope, $rootScope){
        $scope.color = "GREEN";
        $rootScope.rootColor = "BLACK";
    });
    app.config(function(){
        console.log("CONFIG");
    });
    app.run(function(){
        console.log("RUN");
    });
    app.controller("UserController", function ($scope, DemoFactory) {
        $scope.helloMsg = "Hello World!";
        $scope.users = DemoFactory.getUserData();
        // $scope.users = users;
        $scope.moreInfo = function (user) {
            alert(user.firstName + " is working with " + user.company + "!");
        }
        $scope.maxVote = function(){
            var username;
            var MAX_VOTES = 0;
            $scope.users.forEach(function(user){
                if(user.vote > MAX_VOTES){
                    MAX_VOTES = user.vote;
                    username = user.firstName;
                }
            });
            alert("Mr. " + username + " got highest votes!");
        }
    });
    app.controller("PanelController", function ($scope) {
        $scope.tab = 1;
        $scope.isSelected = function (tab) {
            return $scope.tab === tab;
        }
        $scope.selTab = function (tab) {
            $scope.tab = tab;
        }
    });
    app.controller("ReviewController", function($scope){
        $scope.comment = {};
        $scope.submitComment = function(){
            console.log($scope.comment);
            user.reviews.push($scope.comment);
            $scope.comment = {};
        }
    });

    // Directives Demo
    app.directive("commentForm", function(){
        return {
            restrict : 'ACE',
            templateUrl : './views/comment-form.html',
            controller : function($scope){
                $scope.comment = {};
                $scope.submitComment = function(user){
                    // console.log($scope.comment);
                    user.reviews.push($scope.comment);
                    $scope.comment = {};
                }
            }
        }
    })
    app.directive("commentReview", function(){
        return {
            restrict : 'ACE',
            templateUrl : './views/comment-review.html'
        }
    })
    app.directive("userInfo", function(){
        return {
            restrict : 'ACE',
            templateUrl : './views/user-info.html'
        }
    })
    // app.directive("productDetails", function(){
    //     return {
    //         restrict : 'E',
    //         template : '<h2>Showing {{ productName }} details...</h2>',
    //         // compile : function(element, attributes){
    //         //     return function(scope, element, attributes, controller){}
    //         // }
    //         link : function(scope, element, attributes){
    //             element.on("click", function(){
    //                 alert("Clicked");
    //                 attributes.$addClass("feature");
    //                 scope.$apply();
    //             } )
    //         },
    //         controller : function($scope){
    //             $scope.productName = "MyProduct";
    //         }
            
    //     }
    // });
    // app.directive("productDetails", function(){
    //     return {
    //         restrict : 'A',
    //         template : '<h2>Showing Product details...</h2>'
    //     }
    // });
    // app.directive("productDetails", function(){
    //     return {
    //         restrict : 'C',
    //         template : '<h2>Showing Class Directive details...</h2>'
    //     }
    // });
    // app.directive("commentdirective", function(){
    //     return {
    //         restrict : 'M',
    //         replace : true,
    //         // template : '<h2>Showing Comment Directive  details...</h2>'
    //         templateUrl : './views/directives/comment.directive.html'
    //     }
    // });
    

})();

// Model
// users = [{
//     firstName: "Bill",
//     lastName: "Gates",
//     dob: new Date("Dec 21, 1965"),
//     income: 50000,
//     isWorking: true,
//     company: "Microsoft",
//     image: "./assets/images/users_images/bill.jpg",
//     vote: 120,
//     reviews: [{
//         stars: 5,
//         body: "I like Mr. Bill",
//         author: "abc@test.com"
//     },{
//         stars: 3,
//         body: "Great job Mr. Bill!",
//         author: "pqr@test.com"
//     }
//     ]
// },
// {
//     firstName: "Steve",
//     lastName: "Jobs",
//     dob: new Date("Jan 2, 1965"),
//     income: 0,
//     isWorking: false,
//     company: "Apple",
//     image: "./assets/images/users_images/steve.png",
//     vote: 100,
//     reviews: [{
//         stars: 5,
//         body: "I like Mr. Steve",
//         author: "abc@test.com"
//     },{
//         stars: 3,
//         body: "Great job Mr. Steve!",
//         author: "pqr@test.com"
//     }
//     ]
// },{
//     firstName: "Tim B.",
//     lastName: "Lee",
//     dob: new Date("Aug 1, 1965"),
//     income: 40000,
//     isWorking: true,
//     company: "World Wide Web",
//     image: "./assets/images/users_images/tim.jpg",
//     vote: 180,
//     reviews: [{
//         stars: 5,
//         body: "I like Mr. Tim",
//         author: "abc@test.com"
//     },{
//         stars: 3,
//         body: "Great job Mr. Tim!",
//         author: "pqr@test.com"
//     }
//     ]
// }]