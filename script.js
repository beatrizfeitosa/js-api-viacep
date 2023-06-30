async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        
        if(consultaCEPConvertida.erro) {
            throw Error('CEP inexistente!');
        }
        
        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        endereco.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);

        return consultaCEPConvertida;
    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
        console.log(erro);
    }
    
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


// var consultaCEP = fetch('https://viacep.com.br/ws/86705666/json/')
//     .then(response => response.json())
//     .then(r => {
//         if (r.erro) {
//             throw Error('Esse cep não existe!');
//         } else {
//             console.log(r)
//         } 
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('Processamento concluido'));


// console.log(consultaCEP);

// // then - promise resolved
// // catch - promise rejected
