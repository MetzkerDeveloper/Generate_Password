const btnSenha = document.querySelector("#btnSenha");
const senha = document.querySelector("#senha");
const on= document.getElementById('on')
const off= document.getElementById('off')

function showPassword(){
  
  off.style.display = "none"
  on.style.display = "inline-block"
  senha.setAttribute('type', 'text')

}
function hidePassword(){
  on.style.display = "none"
  off.style.display = "inline-block"
  senha.setAttribute('type', 'password')
}


function generatePassword() {
var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
var passwordLength = 8;
var password = "";

for (var i = 0; i < passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber + 1);
}
document.getElementById('senha').value = password
} 