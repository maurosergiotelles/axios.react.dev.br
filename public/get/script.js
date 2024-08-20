
message('/get/script.js');
const formFind = document.querySelector('[data-form-find]');




const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);
  console.log('handleFindSubmit', url);

  axios.get('http://localhost:8080/cozinhas').then(printResponse).catch(console.error);



};

/*
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);
  console.log('handleFindSubmit', url);

  axios.get(url).then(printResponse).catch(console.error);
};
*/

/*
const handleFindSubmit = (e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);
  console.log('handleFindSubmit', url);

  const options = {
    method :'GET',
    url
  };
  axios(options).then(printResponse).catch(console.error);
};

*/

/*
const handleFindSubmit = async(e) => {
  e.preventDefault();

  const data = getFormData(formFind);
  const id = data.get('id');
  const url = apiUser(id);
  console.log('handleFindSubmit', url);

  const options = {
    method :'GET',
    url
  };
  try{
      const response = await axios(options);
      printResponse(response);
    }catch(e){
      console.error(e);
    }
};
*/


formFind.addEventListener('submit', handleFindSubmit);