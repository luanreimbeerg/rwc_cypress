/// <reference types="cypress"/>

const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Cadastrar{

    acessarCadastro(){
        cy.visit(el.linkPage);
    }

    preencherFormularioCadastro(){
        cy.get(el.inputUserName).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');
    }

    submeterCadastro(){
        cy.get(el.butonCadastrar).click();
    }

    verificarCadastro(){
        cy.wait(`@${Routes.as.postcadastro}`).then((postcadastroresponse) => {
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

export default new Cadastrar();