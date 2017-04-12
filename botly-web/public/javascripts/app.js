var app = angular.module('peace-bot', ['ngMaterial'])
	.config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
  });