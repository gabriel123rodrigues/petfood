const axios = require('axios');
const api = axios.create({
    baseURL: 'https://api.pagar.me/1/',
});

const api_key = require('../data/keys.json');

module.exports = {

    createRecipient: async (name) => {
        try {
            const response = await api.post('/recipients', {
                api_key: api_key, // Verifique se a chave da API está correta
                automatic_anticipation_enabled: true,
                bank_account: {
                    bank_code: '341',
                    agencia: '0932',
                    agencia_dv: '5',
                    conta: '58054',
                    type: 'conta_corrente',
                    conta_dv: '1',
                    document_number: '26268738888',
                    legal_name: name,
                },
                transfer_day: '5',
                transfer_enabled: true,
                transfer_interval: 'weekly',
                postback_url: 'https://requestb.in/tl0092tl',
            });
            return response.data; // Retorna os dados da resposta se for necessário
        } catch (err) {
            return { error: true, message: err.message };
        }
    },
    createSplitTranction: async (data) =>{
        try{
            const response = await api.post('/transactions',{
                api_key,
                ...data,
            });
            return {error: false, data: response.data}
        }catch(err){
            return {error: true, message: err.message}
        }
    },
};
