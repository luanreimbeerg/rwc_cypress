const el = require('./elements').ELEMENTS

import Routes from '../../routes'

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

    verificarLogin(){
        cy.wait(`@${Routes.as.postlogin}`).then((postcadastroresponse) => {
            expect(postcadastroresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getTags}`).then((gettagsresponse) => {
            expect(gettagsresponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.getArticles}`).then((getarticleresponse) => {
            expect(getarticleresponse.status).to.eq(200)
        })
    }
}

export default new Login(); 