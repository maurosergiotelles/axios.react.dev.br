var xhr = null;
var url = `https://api.axios.react.dev.br/v1/users/1`;
if(window.XMLHttpRequest){
  xhr = new XMLHttpRequest();
} else if(window.ActiveXObject){
  xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

if(xhr){
  xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
      console.log(xhr.responseText);
      console.log(JSON.parse(xhr.responseText));
      var data = JSON.parse(xhr.responseText);
      var titleElement = document.getElementById("title");
      titleElement.innerText = 
      `
avatar: ${data.avatar}
dob   : ${data.dob}
email : ${data.email }
id    : ${data.id    }
name  : ${data.name  }
phone : ${data.phone }      
      
      `

    }
  }
  xhr.open('GET', url, true);
  xhr.send();

}