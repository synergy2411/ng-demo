(
    function(){
        angular.module("ProductModule", [])
        .directive("productDirective", function(){
            return {
                restrict : 'ACE',
                templateUrl : './views/product/product-directive.html'
            }
        })
        .directive("productDetails", function(){
            return {
                restrict : 'E',
                template : '<h2>Showing {{ productName }} details...</h2>',
                // compile : function(element, attributes){
                //     return function(scope, element, attributes, controller){}
                // }
                link : function(scope, element, attributes){
                    element.on("click", function(){
                        alert("Clicked");
                        attributes.$addClass("feature");
                        scope.$apply();
                    } )
                },
                controller : function($scope){
                    $scope.productName = "MyProduct";
                }
                
            }
        });
    }
)();