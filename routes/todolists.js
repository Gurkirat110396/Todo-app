async function routes(fastify, options){
    const { schemaPostTodo , schemaGetTodo } = require("./schema.json");

    fastify.get('/', schemaGetTodo , async (req,res) => {
        let connection = await fastify.mysql.getConnection()
        connection.query('SELECT * FROM todotable', function(err,result) {
            if(err){
                res.send(err)
            }else{
                res.send(result)
            }
        })
    })

    fastify.post('/', schemaPostTodo ,async (req,res) => {
        const T1 = {
            tododata : req.body.tododata,
            priority : req.body.priority
        }
        JSON.stringify(T1);
        let connection = await fastify.mysql.getConnection()
        connection.query('INSERT INTO todotable SET ?', T1 ,
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
