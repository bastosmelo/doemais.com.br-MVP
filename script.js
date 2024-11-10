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

    function carregarCampanha() {
        // Recuperando os dados do localStorage
        const nome = localStorage.getItem('campanhaNome');
        const imagem = localStorage.getItem('campanhaImagem');
        const descricao = localStorage.getItem('campanhaDescricao');
    
        // Exibindo os dados na página
        document.getElementById('campanhaNome').textContent = nome;
        document.getElementById('campanhaImagem').src = imagem;
        document.getElementById('campanhaDescricao').textContent = descricao;
    }
    
    function doarAgora() {
        // Verificar se o usuário está logado
        const usuarioLogado = localStorage.getItem('usuarioLogado'); // Exemplo de verificação
    
        if (!usuarioLogado) {
            // Se o usuário não estiver logado, redireciona para a página de cadastro/login
            window.location.href = 'login.html';
        } else {
            // Exibe o formulário de doação
            document.getElementById('doacaoForm').style.display = 'block';
        }
    }
    
    function voltarHome() {
        window.location.href = 'index.html'; // Redireciona para a Home
    }
    

    function selecionarCampanha(nome, imagem, descricao) {
        // Armazenando os dados da campanha no localStorage
        localStorage.setItem('campanhaNome', nome);
        localStorage.setItem('campanhaImagem', imagem);
        localStorage.setItem('campanhaDescricao', descricao);
    
        // Redirecionando para a página de campanhas
        window.location.href = 'campanhas.html';
    }


    function carregarCampanha() {
        // Recuperando os dados do localStorage
        const nome = localStorage.getItem('campanhaNome');
        const imagem = localStorage.getItem('campanhaImagem');
        const descricao = localStorage.getItem('campanhaDescricao');
    
        // Exibindo os dados na página
        document.getElementById('campanhaNome').textContent = nome;
        document.getElementById('campanhaImagem').src = imagem;
        document.getElementById('campanhaDescricao').textContent = descricao;
    }
    
    function doarAgora() {
        // Verificar se o usuário está logado
        const usuarioLogado = localStorage.getItem('usuarioLogado'); // Exemplo de verificação
    
        if (!usuarioLogado) {
            // Se o usuário não estiver logado, redireciona para a página de cadastro/login
            window.location.href = 'login.html';
        } else {
            // Exibe o formulário de doação
            document.getElementById('doacaoForm').style.display = 'block';
        }
    }
    
    function voltarHome() {
        window.location.href = 'index.html'; // Redireciona para a Home
    }


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

        // Função para carregar instituições já cadastradas
        function carregarInstituicoes() {
            const listaInstituicoes = JSON.parse(localStorage.getItem('instituicoes')) || [];
            const ul = document.getElementById('listaInstituicoes');

            ul.innerHTML = ''; // Limpa a lista

            listaInstituicoes.forEach((instituicao, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${instituicao.nome} <button onclick="verDetalhes(${index})">Ver Detalhes</button>`;
                ul.appendChild(li);
            });
        }

        // Função para cadastrar nova instituição
        function cadastrarInstituicao(event) {
            event.preventDefault();

            const nome = document.getElementById('nameJuridica').value;
            const contato = document.getElementById('nameContato').value;
            const cnpj = document.getElementById('cnpj').value;
            const endereco = document.getElementById('enderecoJuridica').value;
            const numero = document.getElementById('numeroJuridica').value;
            const complemento = document.getElementById('complementoJuridica').value;
            const bairro = document.getElementById('bairroJuridica').value;
            const cidade = document.getElementById('cidadeJuridica').value;
            const estado = document.getElementById('estadoJuridica').value;
            const email = document.getElementById('emailInstituicao').value;
            const telefone = document.getElementById('telefoneInstituicao').value;
            const doacoes = document.getElementById('doacoesNecessarias').value;
            const campanha = document.getElementById('campanhaVinculada').value;

            const novaInstituicao = {
                nome, contato, cnpj, endereco, numero, complemento, bairro, cidade, estado, email, telefone, doacoes, campanha
            };

            const instituicoes = JSON.parse(localStorage.getItem('instituicoes')) || [];
            instituicoes.push(novaInstituicao);
            localStorage.setItem('instituicoes', JSON.stringify(instituicoes));

            carregarInstituicoes(); // Atualiza a lista
            document.getElementById('instituicaoForm').reset(); // Limpa o formulário
        }

        // Função para visualizar detalhes da instituição
        function verDetalhes(index) {
            window.location.href = `detalhes_instituicao.html?index=${index}`;
        }

        // Máscara para o CNPJ
        $(document).ready(function(){
            $("#cnpj").mask("99.999.999/9999-99");
        });


    function carregarInstituicoes() {
        const lista = document.getElementById('listaInstituicoes');
        lista.innerHTML = ""; // Limpa a lista antes de popular

        instituicoes.forEach((instituicao, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${instituicao.nome}</strong>
                <button onclick="verDetalhes(${index})">Ver Detalhes</button>
            `;
            lista.appendChild(li);
        });
    }

    // Redireciona para a página de detalhes passando informações pela URL
    function verDetalhes(index) {
        const instituicao = instituicoes[index];
        const params = new URLSearchParams({
            nome: instituicao.nome,
            cnpj: instituicao.cnpj,
            endereco: instituicao.endereco,
            contato: instituicao.contato
        }).toString();

        window.location.href = `detalhes_instituicao.html?${params}`;
    }


    

// Função para voltar à Home
function voltarHome() {
    window.location.href = 'index.html';
}

function carregarDetalhesInstituicao() {
    const instituicao = JSON.parse(localStorage.getItem('instituicaoSelecionada'));

    document.getElementById('nomeInstituicao').textContent = instituicao.nome;
    document.getElementById('cnpjInstituicao').textContent = `CNPJ: ${instituicao.cnpj}`;
    document.getElementById('enderecoInstituicao').textContent = `Endereço: ${instituicao.endereco}`;
    document.getElementById('contatoInstituicao').textContent = `Contato: ${instituicao.email}, ${instituicao.telefone}`;
}

function doarAgora() {
    const usuarioLogado = localStorage.getItem('usuarioLogado'); // Verificação de login (exemplo)

    if (!usuarioLogado) {
        window.location.href = 'login.html'; // Redireciona para login
    } else {
        document.getElementById('doacaoForm').style.display = 'block'; // Mostra formulário de doação
    }
}

function confirmarDoacao(event) {
    event.preventDefault();
    alert('Doação confirmada! Redirecionando para o perfil...');
    window.location.href = 'perfil.html'; // Redireciona para perfil do usuário
}

function cancelarDoacao() {
    alert('Doação cancelada. Voltando...');
    window.location.href = 'perfil.html'; // Redireciona para o perfil
}

/* Para deixar o campo telefone no formato (99) 99999-9999 */
  $(document).ready(function(){
    $('#telefoneInstituicao').mask('(99) 99999-9999');
  });

