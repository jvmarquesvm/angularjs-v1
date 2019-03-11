angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource){

	var CanalTempo = $resource('http://api.openweathermap.org/data/2.5/weather?q=Brasilia,BR&units=metric&APPID=<<<IDTEMPO>>>');

	var getTempo = function(){

			CanalTempo.get().$promise.then(function(response){
				$scope.tempo = response;
				console.log(response);
			}, function(promise){
				alert("Erro na busca do recurso");
			});
	};

	//Chamada da função - se colocado no corpo do controller, 
	// será chamado assim que for instânciado
	getTempo();
});