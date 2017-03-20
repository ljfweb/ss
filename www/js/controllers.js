angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	 
})
.controller('ChatsCtrl', function($scope,Chats) {
	$scope.chats = Chats.all(); 
	  $scope.remove = function(chat) {
	    Chats.remove(chat);
	  };
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  	
})
.controller('PcenterCtrl', function($scope) {
	$scope.back=function(){
		window.location.href="#/tab/account";
	}
		
})

.controller('AccountCtrl', function($scope) {
 
  	$scope.goo=function(){
				window.location.href="#/tab/account/account-pcenter";
			}
});
