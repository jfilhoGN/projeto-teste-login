/* global Give, Then, When, And */
import CadastroObjects from '../pageObjects/CadastroObjects';

const cadastroObjects = new CadastroObjects();

Given('que o usuário esteja na aba de cadastro do sistema', () => {
    cadastroObjects.acessarSite();
});

And('informa o {string}, {string}, {string}, {string}, {string}', (nome,email, senha, telefone, site) => {
    cadastroObjects.digtarNome(nome)
    cadastroObjects.digitarEmail(email)
    cadastroObjects.digitarSenha(senha);
    cadastroObjects.digitarTelefone(telefone)
    cadastroObjects.digitarSite(site)

});

And('aceitar termos de serviço', () => {
    cadastroObjects.aceitaTermos()
});

When('clicar no botão de cadastro', () => {
    cadastroObjects.botaoCadastro();
});

Then('o usuário deve ser cadastrado com sucesso ', () => {
    cadastroObjects.cadastradoSucesso()
});

Then('sistema avisa que senha necessita de mais de seis caracteres', () => {
    cadastroObjects.errorSenhaCaracteres()
});

Then('o sistema avisa que campo é obrigatório', () => {
    cadastroObjects.mensagemError()
});