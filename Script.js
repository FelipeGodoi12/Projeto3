    function store() {
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;
        var confirmar_senha = document.getElementById('confirmar_senha').value;
        var telefone = document.getElementById('telefone').value;
        var numbers = /[0-9]/g;

        if(email == "" && senha == "") {
            alert('Informe um email e uma senha');
        } else if(email == ""){
            alert('Informe um email');
        } else if(senha == "") {
            alert('Informe uma senha');
        } else if (!senha.match(numbers)) {
            alert('A senha deve conter ao menos 1 número');
        } else if (confirmar_senha == "") {
            alert('Confirme a senha');
        } else if (senha.length > 16) {
            alert('Máximo de 16 caracteres na senha.');
        } else if (senha !== confirmar_senha) {
            alert('As senhas não coincidem.');
        } else {
            alert('Conta criada com sucesso');
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('senha', JSON.stringify(senha));
            localStorage.setItem('timestamp', JSON.stringify(new Date().toLocaleString()));
            if (telefone !== '') {
                localStorage.setItem('telefone', JSON.stringify(telefone));
            }
            excluir();
            exibirDados();
        }
    }
        
    function excluir() {
        var botao = document.createElement('button');
        botao.innerText = 'Excluir dados';
        botao.onclick = function () {
            localStorage.clear();
            exibirDados();  
        };
        document.getElementById('form').appendChild(botao);
    }

    function exibirDados() {
        var dadosList = document.getElementById('dados');
            
        var email = JSON.parse(localStorage.getItem('email'));
        var senha = JSON.parse(localStorage.getItem('senha'));
        var telefone = JSON.parse(localStorage.getItem('telefone'));
        var timestamp = JSON.parse(localStorage.getItem('timestamp'));

       dadosList.innerHTML = '';

        if (email) {
            var listItemEmail = document.createElement('li');
            listItemEmail.appendChild(document.createTextNode('Email: ' + email));
           dadosList.appendChild(listItemEmail);
        }

        if (senha) {
            var listItemSenha = document.createElement('li');
            listItemSenha.appendChild(document.createTextNode('Senha: ' + senha));
            dadosList.appendChild(listItemSenha);
         }

        if (telefone) {
            var listItemTelefone = document.createElement('li');
            listItemTelefone.appendChild(document.createTextNode('Telefone: ' + telefone));
            dadosList.appendChild(listItemTelefone);
        }

        if (timestamp) {
            var listItemTimestamp = document.createElement('li');
            listItemTimestamp.appendChild(document.createTextNode('Data e Hora: ' + timestamp));
            dadosList.appendChild(listItemTimestamp);
        }
    }
                
    function Limpar(form) {
        form.reset();
    }
