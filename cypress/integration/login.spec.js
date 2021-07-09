/// <reference types="cypress"/>

import login from '../support/pages/login'

import Routes from  '../support/routes'

context('Login',{browser: '!firefox'}, () => {
    before(() => {
        Routes.initResto()
    });
    it('Realizar login com sucesso', () => {
        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();

        //verificação
        login.verificarLogin();
    });
});