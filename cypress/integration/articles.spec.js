/// <reference types="cypress"/>

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Publicação', () => {
    beforeEach(() => {
        

        //Preparação
        cy.backgroudLogin();
        articles.acessarFormulario();
    });
    it('Criar uma nova publicação', () => {
        //Ação
        articles.preencherFormulario();
        articles.submeterPublicacao();
        // Verificação
        articles.verificarSePublicacaoFoiCriadaComSucesso()
        
    });
});



/*
*   tecnica do AAA -> Arrange Act Assert
*              PAV -> Preparação Ação Verificação
*/