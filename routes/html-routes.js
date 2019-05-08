module.exports=function(app,connection){
    app.get('/', function(req,res){
        connection.query('select * from user', function(err, data){
           (err)?res.send(err):res.json({users:data});
       })
    })
}