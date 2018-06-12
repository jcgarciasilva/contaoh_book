module.exports = function (app) {
    var controller = app.controllers.contato;

    app.route('/contatos').get(controller.listaContatos);
    app.route('/contatos/:id')
        .get( controller.getContato)
        .delete( controller.removeContato);
}   