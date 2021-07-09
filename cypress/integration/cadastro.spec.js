/// <reference types="cypress"/>

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar um novo usuário', () => {
        
        cadastro.acessarCadastro()
        cadastro.preencherFormularioCadastro()
        cadastro.submeterCadastro()
        cadastro.verificarCadastro()
    });
});