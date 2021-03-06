(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log("APP LOADED SUCCESFULLY!");
(function () {
    var app = angular.module("UserModule", []);
    app.controller("UserController", function ($scope) {
        $scope.helloMsg = "Hello World!";
        $scope.user = user;
        $scope.moreInfo = function (user) {
            alert(user.firstName + " is working with " + user.company + "!");
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
})();

// Model
user = {
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
}
},{}]},{},[1])