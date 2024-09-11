const axios = require('axios');
const fs = require('fs');


async function salvarCep(CEP) {
    try {
        let url = (`https://viacep.com.br/ws/${CEP}/json/`)
        const response = await axios.get(url);
        fs.writeFile('CEP.txt', JSON.stringify(response.data, null, 2),(erro)=>{
            if(erro){
                console.log('Erro ao salvar arquivo:', erro);
                return;
            }else{
                console.log('Arquivo salvo com sucesso no formato .txt!');
            }
        })
    } catch (error) {
        console.error('Erro ao salvar arquivo:', error);
    }
}


module.exports = salvarCep;