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
document.addEventListener('DOMContentLoaded', function() {
    const pessoaFisicaRadio = document.getElementById('pessoaFisica');
    const pessoaJuridicaRadio = document.getElementById('pessoaJuridica');
    const formFisica = document.getElementById('formFisica');
    const formJuridica = document.getElementById('formJuridica');

    pessoaFisicaRadio.addEventListener('change', function() {
        if (this.checked) {
            formFisica.style.display = 'block';
            formJuridica.style.display = 'none';
        }
    });

    pessoaJuridicaRadio.addEventListener('change', function() {
        if (this.checked) {
            formFisica.style.display = 'none';
            formJuridica.style.display = 'block';
        }
    });

    // Máscara de CPF e CNPJ usando input masks
    const cpfInput = document.getElementById('cpf');
    const cnpjInput = document.getElementById('cnpj');

    cpfInput.addEventListener('input', function() {
        let cpf = cpfInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length > 11) cpf = cpf.slice(0, 11); // Limita a 11 dígitos
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
                 .replace(/(\d{3})(\d)/, '$1.$2')
                 .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        cpfInput.value = cpf;
    });

    cnpjInput.addEventListener('input', function() {
        let cnpj = cnpjInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cnpj.length > 14) cnpj = cnpj.slice(0, 14); // Limita a 14 dígitos
        cnpj = cnpj.replace(/(\d{2})(\d)/, '$1.$2')
                   .replace(/(\d{3})(\d)/, '$1.$2')
                   .replace(/(\d{3})(\d)/, '$1/$2')
                   .replace(/(\d{4})(\d{1,2})$/, '$1-$2');
        cnpjInput.value = cnpj;
    });
});
