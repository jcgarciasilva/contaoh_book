var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var _idProcurado = new ObjectID('5b225bcbb35aff8cd4ddce9b');

MongoClient.connect('mongodb://localhost:27017/contatooh',
    function (erro, db) {
        if (erro) throw console.log(erro);
        console.log('antes de buscar');
        var teste = db.collection('contatos').findOne({ _id: _idProcurado },
            function (err, contato) {
                if (err) throw err;
                console.log(contato);
            }
        );
    }
);