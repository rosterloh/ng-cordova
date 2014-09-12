// install  :     cordova plugin add https://github.com/don/cordova-plugin-ble-central#:/plugin
// link     :     https://github.com/don/cordova-plugin-ble-central

angular.module('ngCordova.plugins.bleCentral', [])

.factory('$cordovaBleCentral', ['$q', function ($q) {

  return {
    scan: function(services, seconds, success, failure) {
      var q = $q.defer();

      if (cordova.platformId === 'android') { // Android filtering is broken
        services = [];
      }

      ble.scan(services, seconds, function (result) {
        q.resolve(result);
      }, function (err) {
        q.reject(err);
      });

      return q.promise;
    }
  }
}]);
