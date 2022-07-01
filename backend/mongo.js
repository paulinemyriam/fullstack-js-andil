//documentation => installer compass => creer BDD nommé 'wiki' et collection 'andil' puis 2 champs 'title' et 'content'
//activer extension CORS google

const express=require('express')
const hostname='localhost'
const port =3001;

const app= express()

var cors = require('cors')
app.use(cors())


app.use(express.json({// DANS CETTE MERDE LA faut trouver ce qui restreint  les requetes PUT DELETE
    type: ['application/json', 'text/plain']
  }))
  

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home');
});
app.listen(port, hostname, function () {
    console.log('Le serveur tourne sur l\'adresse : http://' + hostname + ':' + port);
});


const MongoClient=require('mongodb').MongoClient;
//MongoClient.connect('mongodb+srv://mongo:FTTfDRYIhxbhPn9O@cluster0.p0rbh.mongodb.net/?retryWrites=true&w=majority',function(err,client){
MongoClient.connect('mongodb://localhost:27017',function(err,client){

if(err) throw err;
else{
    var db=client.db('wiki');
    var ObjectId = require('mongodb').ObjectId; //récupération de l'object id
    var collection = db.collection('andil');
    
    
    app.route('/all')
    .get(function (req, res, next) { // GET all  
        collection.find().toArray(function (err, result) {
            if (err) throw err;
            res.json(result)
        })
    })
    app.route('/find')
    .post(function (req, res) { //par tag ou titre
        console.log(req.body)
        
        //faut les V1 putain de merde
      /*  collection.find({title:'test'} , function (err, result) {
            if (err) throw err;
            res.json(result)
        })*/
        
            collection.find(req.body).toArray(function (err, result) {
                if (err) throw err;
                res.json(result)
                console.log(result);
            })
        
    })
    
    app.route('/articles')
    .post(function (req, res, next) { 
        console.log(req.body)
        let v=req.body.version
        if(req.body.version==undefined){
            v='v'+1
        }
        console.log(v);
        let version={
            title:req.body.title,
            content:req.body.content,
            category:req.body.category,
            tags:req.body.tags
        }
        
        //verification que req.body contiennet un title etc en amont
        collection.insertOne({
            title:req.body.title,
            content:req.body.content,
            category:req.body.category,
            tags:req.body.tags,
            lastVersion:1,
            [v]:version
        }
            , function (err, result) {
            if (err) throw err;
            res.json(result);
        })
    })
    .delete(function (req, res) { // DELETE one
        console.log(req.query.title)
        collection.deleteOne({title: req.query.title}, function (err, result) {
            if (err) throw err;
            res.json(result)
        })

    }) 
    .put(function (req, res, next) {
       //MODIFICATION de la derniere version !!!!  en fait faudrait d'abord sauvegarder l'ancienne version puis incrementer [v++]
       console.log(req.body)
       let v= req.body.lastVersion+1

       let version={
        title:req.body.title,
        content:req.body.content,
        category:req.body.category,
        tags:req.body.tags
        
    }
        collection.updateOne({
            title: req.body.title//new ObjectId(req.params.id) // _id n'est pas qu'une clé
        }, {
            $set: {
                title:req.body.title,
                content:req.body.content,
                category:req.body.category,
                tags:req.body.tags,
                lastVersion:v,
                ['v'+v]:version
            }
        }, function (err, result) {
            if (err) throw err;
            res.json({
                status: "200",
                data: result
            });

        });
    })   
}
})
