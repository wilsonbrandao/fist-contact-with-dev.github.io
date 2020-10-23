let minhaImagem = document.querySelector('img');
minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'image/wilson-brandao.png'){
        minhaImagem.setAttribute ('src', 'image/wilson-brandao-2.png');
    }else{
        minhaImagem.setAttribute ('src', 'image/wilson-brandao.png');
    }
}

let myButton = document.querySelector('button');
let myHead = document.querySelector('h1');

function defineNomeUsuario() {
    let myName = prompt ('Por favor, digite seu nome');
    if (!myName || myName === null){
        defineNomeUsuario();
    }else{  
    localStorage.setItem('nome', myName);
    myHead.textContent = 'Bem vindo ao meu site '+ myName;
    }
  
}
if (!localStorage.getItem('nome')){
    defineNomeUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    myHead.textContent = 'Bem vindo ao meu site ' + nomeGuardado
}

myButton.onclick = function() {defineNomeUsuario();
}