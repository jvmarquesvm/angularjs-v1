angular.module('aplicacao').controller('ListagemAlunosController', function($scope, $filter, AlunosCollectionService){
	$scope.nome = 'João Victor';
	var nome = 'Outro nome';
	$scope.iniciado = false;

	$scope.hoje = new Date();

	$scope.filtro = [];

	$scope.alunos = AlunosCollectionService.getAlunos();

	$scope.finalizar = function(){
		$scope.iniciado = false;
	};
	$scope.iniciar = function(){
		$scope.iniciado = true;
	};

	$scope.ordenarPorNome = function(){
		AlunosCollectionService.ordenarPorNome();
		$scope.alunos = AlunosCollectionService.getAlunos();
	};

	$scope.ordenarPorIdade = function(){
		AlunosCollectionService.ordenarPorIdade();
		$scope.alunos = AlunosCollectionService.getAlunos();
	};

	$scope.cadastrar = false;

	$scope.exibeCadastro = function(){
		$scope.cadastrar = !$scope.cadastrar;
	};
});