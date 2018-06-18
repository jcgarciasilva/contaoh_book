angular.module('contatooh').controller('ContatosController', function ($scope, Contato) {

    $scope.contatos = [];
    $scope.total = 0;
    $scope.filtro = '';
    $scope.incrementa = function () {
        $scope.total++;
    };

    console.log('iniciou');

    function buscaContatos() {
        Contato.query(
            function (contatos) {
                $scope.contatos = contatos;
            },
            function (erro) {
                console.log("Não foi	possível	obter	a	lista	de	 contatos");
                console.log(erro);
            }
        );
    }
    buscaContatos();

    $scope.remove = function (contato) {
        let promise = Contato.delete({ id: contato._id }).$promise;
        promise
            .then(buscaContatos)
            .catch(function (erro) {
                console.log("Não	foi	possível	remover	o	contato");
                console.log(erro);
            });

    };


});