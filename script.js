function abrirInstituicoes() {
    window.location.href = "instituicoes.html"; // Redireciona para página de instituições
}

function abrirDoadores() {
    window.location.href = "doadores.html"; // Redireciona para página de doadores
}

function abrirCampanhas() {
    window.location.href = "campanhas.html"; // Redireciona para página de campanhas
}



document.getElementById('instituicaoForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Instituição cadastrada com sucesso!');
    // Aqui você pode adicionar código para enviar os dados ao servidor
});

document.getElementById('doadorForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Doador cadastrado com sucesso!');
    // Aqui você pode adicionar código para enviar os dados ao servidor
});

document.getElementById('campanhaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Campanha cadastrada com sucesso!');
    // Aqui você pode adicionar código para enviar os dados ao servidor
});


// Lista de Instituições
let instituicoes = [];
document.getElementById('instituicaoForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeInstituicao = document.getElementById('nomeInstituicao').value;
    instituicoes.push(nomeInstituicao);
    atualizarListaInstituicoes();
    alert('Instituição cadastrada com sucesso!');
});

function atualizarListaInstituicoes() {
    const lista = document.getElementById('listaInstituicoes');
    lista.innerHTML = '';
    instituicoes.forEach((instituicao, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${instituicao}`;
        lista.appendChild(li);
    });
}

// Lista de Doadores
let doadores = [];
document.getElementById('doadorForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeDoador = document.getElementById('nomeDoador').value;
    doadores.push(nomeDoador);
    atualizarListaDoadores();
    alert('Doador cadastrado com sucesso!');
});

function atualizarListaDoadores() {
    const lista = document.getElementById('listaDoadores');
    lista.innerHTML = '';
    doadores.forEach((doador, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${doador}`;
        lista.appendChild(li);
    });
}

// Lista de Campanhas
let campanhas = [];
document.getElementById('campanhaForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const nomeCampanha = document.getElementById('nomeCampanha').value;
    campanhas.push(nomeCampanha);
    atualizarListaCampanhas();
    alert('Campanha cadastrada com sucesso!');
});

function atualizarListaCampanhas() {
    const lista = document.getElementById('listaCampanhas');
    lista.innerHTML = '';
    campanhas.forEach((campanha, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${campanha}`;
        lista.appendChild(li);
    });
}

// Função para voltar para a página Home
function voltarHome() {
    window.location.href = "index.html";
}


// Função do Cadastramento das Instituições, Doadores e Campanhas
document.addEventListener("DOMContentLoaded", function() {
    const pessoaFisicaRadio = document.getElementById("pessoaFisica");
    const pessoaJuridicaRadio = document.getElementById("pessoaJuridica");
    const cpfField = document.getElementById("cpfField");
    const cnpjField = document.getElementById("cnpjField");
    const campanhaField = document.getElementById("campanhaField");

    // Verifica se o tipo de pessoa é física ou jurídica e mostra o campo correspondente
    pessoaFisicaRadio.addEventListener("change", function() {
        if (pessoaFisicaRadio.checked) {
            cpfField.style.display = "block";
            cnpjField.style.display = "none";
            campanhaField.style.display = "none"; // Esconde o campo de CNPJ para campanhas
        }
    });

    pessoaJuridicaRadio.addEventListener("change", function() {
        if (pessoaJuridicaRadio.checked) {
            cpfField.style.display = "none";
            cnpjField.style.display = "block";
            campanhaField.style.display = "none"; // Esconde o campo de CNPJ para campanhas
        }
    });

    // Caso seja cadastro de uma campanha, exibe o campo para selecionar uma instituição
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('campanha')) {
        campanhaField.style.display = "block";
        cpfField.style.display = "none";
        cnpjField.style.display = "none";
    }
});