/// <reference types="cypress"/>

import login from '../support/pages/login'

context('Login',{browser: '!firefox'}, () => {
    it('Realizar login com sucesso', () => {
        login.acessarLogin();
        login.preencherFormulario();
        login.submeterFormulario();

        //verificação
    });
});