(function(){
    angular.module("FilterDemoModule", [])
    .filter("concatenationalcode", function(){
        return function(value, countryName){
            console.log(countryName);
            if(countryName==='IND')
                return "+91 " + value;
            else if (countryName === 'US')  
                return "+01 " + value;
            else 
                return "80 " + value;
        }
    })
    .controller('FilterController', function($scope,$filter) {
        $scope.now = $filter('date') (new Date());
        $scope.employees = 
           [
               {
                   "employeeId":101,
                   "employeeName":"Anil",
                   "contactNumber":"8645635092"
               },
               {
                   "employeeId":102,
                   "employeeName":"Ganesh",
                   "contactNumber":"9946945634"
               },
               {
                   "employeeId":103,
                   "employeeName":"Karthik",
                   "contactNumber":"9986173092"
               },
               {
                   "employeeId":104,
                   "employeeName":"Shashank",
                   "contactNumber":"9986464892"
               },
               {
                   "employeeId":105,
                   "employeeName":"Abishek",
                   "contactNumber":"9958659892"
               },
               {
                   "employeeId":106,
                   "employeeName":"Nachiket",
                   "contactNumber":"8997358092"
               },
               {
                   "employeeId":107,
                   "employeeName":"Vaishali",
                   "contactNumber":"9739179037"
               }
           ];
           $scope.sortColumn = "+employeeId";
   });
   
   
   
})();