async function routes(fastify, options){
    const { schemaPostTodo , schemaGetTodo } = require("./schema.json");

    fastify.get('/', schemaGetTodo , async (req,res) => {
        let connection = await fastify.mysql.getConnection()
        connection.query('SELECT * FROM todo', function(err,result) {
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })

    fastify.post('/', schemaPostTodo ,async (req,res) => {
        const T1 = {
            id : req.body.id,
            tododata : req.body.tododata
        }
        JSON.stringify(T1);
        let connection = await fastify.mysql.getConnection()
        connection.query('INSERT INTO todo SET ?', T1 ,
            function(err,result){
                if(err){
                    res.send(err)
                }else{
                    res.send(T1,result)
                }
                connection.release();
            })
    })
}

module.exports = routes