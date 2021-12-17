const moment = require('moment')
const conexao = require('../infraestutura/conexao')

class Atendimento {
    adiciona(atendimento){
      //  const dataCriacao = moment()
       // const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
       // const atendimentoDatado = {...atendimento, dataCriacao, data }
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro,resultados) =>{
           if(erro){
            console.log(erro);
           } else{
               console.log(resultados);
           }
        }) 
    }
}

module.exports = new Atendimento