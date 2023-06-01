describe('Push Spec', () => {
  it('Main', () => {
    //Visit landing page
    cy.visit('https://cse110-sp23-group29.github.io/')

    //Click start
    cy.get('video')
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .click()

    //Verify video is played and finishes
    cy.get('video')
      .should('have.prop', 'paused', false)
      .and('have.prop', 'ended', false)

    //Check page has switched to main card page
    cy.url({timeout: 10000})
      .should('eq', 'https://cse110-sp23-group29.github.io/BlueScreen.html')

    //Click each card
    cy.get('.card')
      .should('have.length', 3)
      .each(($card, index, $list) => {
        cy.wrap($card).click()

        cy.get('#modal' + (index + 1))
          .invoke('attr', 'style')
          .should('not.contain', 'none')

        cy.get('.close')
          .then(($close) => {
            $close[index].click()
          })
      })
  })
})