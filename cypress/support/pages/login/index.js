const el = require('./elements').ELEMENTS

class Login{
    //acessar a pagina
    acessarLogin(){
        cy.visit('login');
    }

    //preenceher o formulario
    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }

    //submeter o formulario
    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
    }
    //verificação
}

export default new Login(); 