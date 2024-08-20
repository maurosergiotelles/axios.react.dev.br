const formUser = document.querySelector('[data-form-user]');

/*
const handleFormUser = (e) =>{
  e.preventDefault();
  const data = getFormData(formUser);
  console.log(Object.fromEntries(data));
  const url = apiUser();
  axios.post(url, data).then(printResponse);
};
*/
const handleFormUser = (e) => {
  e.preventDefault();
  const data = getFormData(formUser);
  console.log(Object.fromEntries(data));
  const url = apiUser();


  const dados = {
    "restaurante": {
      "id": 1
    },
    "formaPagamento": {
      "id": 2
    },
    "enderecoEntrega": {
      "cep": "1234578",
      "logradouro": "Rua Sem Saída",
      "numero": "350",
      "complemento": "casa",
      "bairro": "Centro",
      "cidade": {
        "id": 1
      }
    },
    "itens": [
      {
        "produtoId": 1,
        "quantidade": 3,
        "observacao": "Sem pimenta"
      },
      {
        "produtoId": 2,
        "quantidade": 1


      }
    ]
  };




  const options = {
    method: 'POST',
    url: 'http://localhost:8080/pedidos',
    data: dados,
    headers: {
      'Content-Type': 'application/json'
      , 'fdfsd': 'fdsfd'
    }
  };




  axios(options).then(printResponse);


};


formUser.addEventListener('submit', handleFormUser);
