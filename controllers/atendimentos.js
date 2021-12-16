

module.exports = app =>{
    app.get('/atendimentos', (req,res) => 
res.send('Rota de atendimento e está realizando um get'))
}