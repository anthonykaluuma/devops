context("Website Test" , () => {
    
    const url = 'http://localhost'
    const port = '3000'

    const bannerSelector = '.opening-hero'
   
    before(() => {
        // load fixtures
        cy.fixture('components.json').then(response => {
            components = response
        })
        // clear user
        cy.clearLoggedUser(url)
    })
    it('should log non-intro eligible free user in', () => {
        cy.visit(url, port)
        cy.get(`${bannerSelector} h1`).should($h1Element => {
            expect($h1Element.get(0).innerText).to.eq('')
        })
    })

})