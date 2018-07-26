(function(){
    angular.module("DirectiveDemoModule", [])
    .directive("demoDirective", function(){
        return {
            restrict : 'ACE',
            // template : '<div ng-transclude></div><h2>Name  : {{ demoName }}</h2> <button ng-click="callmsg()">Call Parent</button>',
            templateUrl : './views/directives/directive-demo.html',
            scope : {
                xyz : '@' ,     //Text binding
                abc : '=' ,      //Two way binding
                callmsg : '&'
            },
            transclude : true,
            link : function(scope, element, attributes){
                // Inherited Parent Scope
                // console.log(scope.demoName);                
                
                // Isolated Child Scope
                console.log("One Way Text Binding : " + scope.xyz);
                console.log("Two way Model Binding : " + scope.abc);

                // Watching the Model change
                scope.$watch("demoName", function(newValue, oldValue){
                    console.log("OLD ", oldValue);
                    console.log("NEW ", newValue);
                })
            },
            controller : function($scope){
                // console.log($scope.demoName);
                // $scope.someName = "iGATE";
            }
        }
    })
    .controller("DemoController", function($scope){
        $scope.demoName = "Capgemini";
        $scope.sendMessage = function(){
            alert("Message Received!");
        }
        // console.log($scope.someName);
    })
})();