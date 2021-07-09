class Routes{

    as = {
        postArticles:  'POSTArticles',
        getArticlesTitle:  'GETArticlesTitle',
        getArticlesTitleComments:  'GETArticlesTitleComments',

        postcadastro: 'POSTCadastro',
        getTags: 'GETTags',
        getArticles: 'GETArticles',
        postlogin: 'POSTLogin'
    }

    init(){
        cy.server()
        //articles
        cy.route('POST', '**/api/articles').as(this.as.postArticles)
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle)
        cy.route('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments)

    

    
    }

    initResto(){
        cy.server();
        cy.route('POST', '**/api/users').as(this.as.postcadastro);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/**').as(this.as.getArticles);

        //Login
        cy.route('POST', '**/api/users/login').as(this.as.postlogin);
    }



    
}

export default new Routes();