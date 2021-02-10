/* global Give, Then, When, And */
import LoginObjects from '../pageObjects/LoginObjects';

const loginObjects = new LoginObjects();

Given('que o usuário esteja cadastrado no sistema', () => {
    loginObjects.acessarSite();
});

And('informa o {string} ', (email) => {
    loginObjects.digitarEmail(email)
});

And('informa a {string}', (senha) => {
    loginObjects.digitarSenha(senha);
});

When('clicar em "Entrar"', () => {
    loginObjects.botaoLogin();
});

Then('o sistema deve informar {string} de erro ou sucesso', (mensagem) => {
    if (mensagem == 'sim') {
        loginObjects.acessarHome()
    } else {
        loginObjects.mensagemValidacao();
    }

});