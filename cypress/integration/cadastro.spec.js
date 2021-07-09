/// <reference types="cypress"/>

import cadastro from '../support/pages/cadastro'

import Routes from '../support/routes'

context('Cadastro', () => {
    before(() => {
        Routes.initResto()
    });
    it('Cadastrar um novo usuário', () => {
        
        cadastro.acessarCadastro()
        cadastro.preencherFormularioCadastro()
        cadastro.submeterCadastro()
        cadastro.verificarCadastro()
    });
});