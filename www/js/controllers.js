//JS round to decimal points
function round(value, decimals) {

        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $window) {

  //Change body font size with js
  $scope.calculateDimensions = function(gesture) {
    $scope.font_size = round($window.innerWidth/173, 1);
    document.body.style.fontSize = $scope.font_size + "rem";
    document.body.style.lineHeight = $scope.font_size*1.3 + "rem"
  }



  angular.element($window).bind('resize', function(){
    $scope.$apply(function() {
      $scope.calculateDimensions();
    })
  });

  $scope.calculateDimensions();

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PluginsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PluginCtrl', function($scope, $stateParams) {
});
