const axios = require('axios');
const fs = require('fs');
const salvarCep = require('./cep')


async function salvarCnpj(CNPJ) {
    try {
        CNPJ = CNPJ.replace(/[^\d]/g, '')
        console.log(CNPJ)
        let url = (`https://publica.cnpj.ws/cnpj/`+ CNPJ)

        // let {nome,idade,telfone} = req.body
        const response = await axios.get(url);
        let {estabelecimento} = response.data
      
        let cep = estabelecimento.cep
        if (cep) {
            cep = cep.replace(/\D/g, "")
            salvarCep(cep);
        }
        fs.writeFile('dados.txt', JSON.stringify(response.data, null, 2),(erro)=>{
            if(erro){
                console.log('Erro ao salvar arquivo:', erro);
                return;
            }else{
                console.log('Arquivo salvo com sucesso no formato .txt!');

            }
        })



    } catch (error) {
        console.error('Erro ao salvar arquivo:', error);
        console.log(CNPJ)
    }
}

salvarCnpj('00000000000191') // Teste de uso do módulo salvarCnpj()

module.exports = salvarCnpj;





