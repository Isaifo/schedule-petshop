const conexao = require('../infraestutura/conexao')

class Atendimento {
    adiciona(atendimento){
        const sql = 'INSERT INTO Atendimmentos SET ?'

        conexao.query(sql, atendimento, (erro,resultados) =>{
           if(erro){
            console.log();
           } else{
               console.log(resultados);
           }
        }) 
    }
}

module.exports = new Atendimento