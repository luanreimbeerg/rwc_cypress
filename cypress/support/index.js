Cypress.Commands.add('backgroudLogin', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            User: {
                email: "agilizeii@gmail.com", 
                password: "12345678"
            }
        }
    }).then((loginResponse) =>{
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)

        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        });
    });
})

import Routes from '../support/routes'

before(()=> {
    Routes.init()
})