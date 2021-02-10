
class LoginObjects {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit('http://url.com')
    }

    digitarEmail(email){
        cy.get('[data-test-id="email"]').type(email)
    }

    digitarSenha(senha){
        cy.get('[data-test-id="senha"]').type(senha)
    }

    botaoLogin(){
        cy.get('[data-test-id="login"]').click()
    }

    acessarHome(){
        cy.get('h2[data-test-id="home"]').should('have.text', 'Bem vindo');
    }

    mensagemValidacao(){
        cy.get('[data-test-id="error"]').and('have.text','Email ou senha incorretos').should('be.visible');
    }
  
}

export default LoginObjects;