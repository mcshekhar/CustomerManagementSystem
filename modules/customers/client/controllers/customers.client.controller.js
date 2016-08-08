(function () {
  'use strict';

  // Customers controller
  angular
    .module('customers')
    .controller('CustomersController', CustomersController);

  CustomersController.$inject = ['$scope', '$state', 'Authentication', 'customerResolve'];

  function CustomersController ($scope, $state, Authentication, customer) {
    var vm = this;

    vm.authentication = Authentication;
    vm.customer = customer;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;
    vm.cancel = cancel;

    vm.channelOptions = [
      {id:'1', item:'Facebook'},
      {id:'2', item:'Twitter'},
      {id:'3', item:'Email'}
    ];

    // Cancel Customer Editing
    function cancel() {
      if (confirm('Are you sure you want to cancel editing?')) {
        $state.go('customers.list');
      }
    }

    // Remove existing Customer
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.customer.$remove($state.go('customers.list'));
      }
    }

    // Save Customer
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.customerForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.customer._id) {
        vm.customer.$update(successCallback, errorCallback);
      } else {
        vm.customer.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('customers.list', {
          customerId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }

  // Customers controller
  angular
    .module('customers')
    .directive('customerList', customerList);

  customerList.$inject = [];

  function customerList () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'modules/customers/client/views/customer-list-template.client.view.html',
      link: function(scope, element, attrs){

      }
    };
  }
})();
