const lowerletters="abcdefghijklmnopqrstuvwxyz";
const upperletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="1234567890";
const symbols="!@#$%&*";

let generatebtn=document.querySelector("#generate");
let passwordEl=document.querySelector("#password");
let lengthEl=document.querySelector("#length");
let lowercaseEl=document.querySelector("#lowercase");
let uppercaseEl=document.querySelector("#uppercase");
let symbolsEl=document.querySelector("#symbols");
let numbersEl=document.querySelector("#numbers");

generatebtn.addEventListener("click",()=>{
    let length=lengthEl.value;
    let password="";
    let characters="";

    if(lowercaseEl.checked){
        characters+=lowerletters;
    }
    if(uppercaseEl.checked){
        characters+=upperletters;
    }
    if(symbolsEl.checked){
        characters+=symbols;
    }
    if(numbersEl.checked){
        characters+=numbers;
    }
    for(let i=0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    passwordEl.value=password;
})
