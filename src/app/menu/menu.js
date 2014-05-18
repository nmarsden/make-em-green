angular.module( 'meg.menu', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'menu', {
    url: '/menu',
    views: {
      "main": {
        controller: 'MenuCtrl',
        templateUrl: 'menu/menu.tpl.html'
      }
    },
    data:{ pageTitle: 'Menu' }
  });
})

.controller( 'MenuCtrl', function MenuCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
