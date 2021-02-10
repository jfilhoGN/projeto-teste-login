class CadastroObjects {
    
    acessarSite() {
        cy.visit('http://url.com')
    }

    digitarNome(email){
        cy.get('[data-test-id="nome"]').type(email)
    } 

    digitarEmail(email){
        cy.get('[data-test-id="email"]').type(email)
    }

    digitarSenha(senha){
        cy.get('[data-test-id="senha"]').type(senha)
    }

    digitarTelefone(telefone){
        cy.get('[data-test-id="telefone"]').type(telefone)
    }

    digitarSite(site){
        cy.get('[data-test-id="site"]').type(site)
    }

    botaoCadastro(){
        cy.get('[data-test-id="cadastro"]').click()
    }

    aceitaTermos() {
        cy.get('[data-test-id="termos-servico"]').check()
    }

    cadastradoSucesso(){
        cy.get('h2[data-test-id="cadastrado"]').should('have.text', 'Usuário Cadastrado com Sucesso');
    }

    mensagemError(){
        cy.get('[data-test-id="error-email"]').and('have.text','Campo Obrigatório').should('be.visible');
    }

    errorSenhaCaracteres(){
        cy.get('[data-test-id="error-senha"]').and('have.text','Minimo Seis Caracteres').should('be.visible');
    }
  
}

export default CadastroObjects;