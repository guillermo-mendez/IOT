angular
.module('iot', [])
.controller('temperatura_controller', ['$scope','$http', temperatura_controller]);

function temperatura_controller($scope,$http){

    $scope.obtenerDatos = function(){
        var url= "https://iotmmsbc08f0ed0.us1.hana.ondemand.com/com.sap.iotservices.mms/v1/api/http/app.svc/";
        var user= "P2000097896";
        var clave= "Guillo3126012851";
        //Invocar serivicio web IOT metodo GET. Tabla Hana de temperatura
        $http.get(url, {
            headers: {
            "Authorization":$scope.make_base_auth(user, clave)
            }
          })
          .then(function successCallback(res) {
              debugger;
            $scope.DataTemperature = res.data.d.results;
          }, function errorCallback(res){
              console.log("Error al invocar servicio SCP");
          });
        
    },
    //Funcion que permite cifrar la seguridad al invocar el servicio web
    $scope.make_base_auth = function(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return 'Basic ' + hash;
    }

};
