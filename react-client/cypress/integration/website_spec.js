context("Website Test" , () => {
    
    const host = 'localhost'
    const port = '3000'

    const bannerSelector = '.App-title'

    let componentStrings = {}

   
    before(() => {
        // visit URL
        cy.visitUrl(host, port)
        // load fixtures
        cy.fixture('componentStrings.json').then(response => componentStrings = response)

    })
    it('should contain website title', () => {
        cy.get(`${bannerSelector}`).should('have.text', componentStrings.hero.h1)
    })

})