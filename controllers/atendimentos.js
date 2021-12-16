

module.exports = app =>{
 app.get('/atendimentos', (req,res) => 
res.send('Rota de atendimento e está realizando um get'))

 app.post('/atendimentos', (req, res) =>{

    console.log(req.body)

 res.send('Você está na rota de atendimento e está realizando um post')
 })
}