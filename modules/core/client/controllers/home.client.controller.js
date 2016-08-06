'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.alerts = [
			{
				icon: 'glyphicon-user',
				colour: 'btn-success',
				total: '20,480',
				description: 'TOTAL CUSTOMERS'
			},
			{
				icon: 'glyphicon-eye-open',
				colour: 'btn-warning',
				total: '850',
				description: 'FOLLOW UP REQUIRED'
			},
			{
				icon: 'glyphicon-edit',
				colour: 'btn-success',
				total: '560',
				description: 'NEW CUSTOMERS IN 2016'
			},
			{
				icon: 'glyphicon-record',
				colour: 'btn-info',
				total: '2000',
				description: 'EMAILS SENT'
			},
			{
				icon: 'glyphicon-calendar',
				colour: 'btn-primary',
				total: '180',
				description: 'UPCOMING EVENTS'
			},
			{
				icon: 'glyphicon-flag',
				colour: 'btn-danger',
				total: '680',
				description: 'REFERRALS TO MODERATE'
			}
		];
  }
]);
