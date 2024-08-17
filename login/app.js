// Seleção de elementos
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Mostrar o formulário de cadastro
showRegister.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
});

// Mostrar o formulário de login
showLogin.addEventListener('click', () => {
    registerContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Função para salvar o usuário no localStorage
function saveUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para verificar o login
function checkLogin(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.username === username && user.password === password);
}

// Processar o cadastro
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    saveUser(username, password);
    alert('Cadastro realizado com sucesso!');
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
    showLogin.click(); // Voltar para a tela de login
});

// Processar o login
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (checkLogin(username, password)) {
        alert('Login realizado com sucesso!');
        // Aqui você pode redirecionar o usuário para outra página
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
