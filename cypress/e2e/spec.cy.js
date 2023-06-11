describe('index.html', () => {
  it('Visit', () => {
    //Visit landing page
    cy.visit('https://cse110-sp23-group29.github.io/')
  })

  it('Transition', () => {
    cy.visit('https://cse110-sp23-group29.github.io/')

    //Click start
    cy.get('#video-player')
      .should('have.prop', 'paused', true)
      .and('have.prop', 'ended', false)
      .click()

    //Verify video is played and finishes
    cy.get('video')
      .should('have.prop', 'paused', false)
      .and('have.prop', 'ended', false)

    //Check page has switched to start page
    cy.url({timeout: 10000})
      .should('eq', 'https://cse110-sp23-group29.github.io/StartScreen.html')
  })
})

for(let i = 0; i < 5; i++){
  describe('StartScreen.html', () => {
    //Visit Start Screen
    it('Visit', () => {
      cy.visit('https://cse110-sp23-group29.github.io/StartScreen.html')
      cy.get('#start').should('exist')
      cy.get('#volume-icon').should('exist')
      cy.get('img.settings-icon').should('exist')
    })
  
    //Test Settings functions
    testSettings('https://cse110-sp23-group29.github.io/StartScreen.html')
  
    //Test Dark Mode
    testDarkMode('https://cse110-sp23-group29.github.io/StartScreen.html')
  })
  
  describe('BlueScreen.html', () => {
    //Visit Blue Screen
    it('Visit', () => {
      cy.visit('https://cse110-sp23-group29.github.io/BlueScreen.html')
      cy.get('#volume-icon').should('exist')
      cy.get('img.settings-icon').should('exist')
    })
  
    //Test Settings functions
    testSettings('https://cse110-sp23-group29.github.io/BlueScreen.html')
  
    //Test Dark Mode
    testDarkMode('https://cse110-sp23-group29.github.io/BlueScreen.html')
  })
  
  describe('User Form / Card Flipping ' + (i + 1), () => {
    //Visit
    it('Visit', () => {
      cy.visit('https://cse110-sp23-group29.github.io/BlueScreen.html?darkMode=true')
      cy.get('#volume-icon').should('exist')
      cy.get('img.settings-icon').should('exist')
      cy.get('#name').should('exist')
      cy.get('#city').should('exist')
      cy.get('#date').should('exist')
    })
  
    //Input Name, City of Birth, Birthday
    it('Fill-out Form / Flip Cards', () => {
      cy.visit('https://cse110-sp23-group29.github.io/BlueScreen.html')
  
      cy.get('#name')
        .type('TEST NAME')
      cy.get('#city')
        .type('TEST CITY')
      cy.get('#date')
        .type('2000-01-01')
      cy.get('button[onclick = "validateForm()"]')
        .click()
      cy.get('div.card')
        .should('exist')
  
      //FLIP CARDS
      cy.get('div.top-left')
        .click()
      cy.get('div.top-middle')
        .click()
      cy.get('div.top-right')
        .click()

      //RESET BUTTON
      cy.get('#askAnotherFortuneBtn')
        .click()
      cy.get('#start').should('exist')
    })
  })
}



function testSettings(url){
  it('Settings', () => {
    cy.visit(url)

    //Click Settings
    cy.get('img.settings-icon')
      .click()
    cy.get('#popup')
      .invoke('attr', 'style')
      .should('not.include', 'none')
    
    //Check Settings functions
    cy.get('#popup').within(() => {
      //Check all inputs are accessible
      cy.get('input')
        .should('have.length', 3)
        
      //Check functions of Music button
      cy.get('input[id=music-button]')
        .should('have.prop', 'checked', true)

      cy.get('input[id=music-button]')
        .uncheck()
      cy.document().its('body')
        .within(() => {
          cy.get('audio')
            .should('have.prop', 'paused', true)
        })

      //Check functions of Music slider
      cy.get('input[id=volume-slider]')
        .should('have.prop', 'value', '30')

      cy.get('input[id=volume-slider]')
        .invoke('val', 60)
        .trigger('change')
      
      cy.get('input[id=volume-slider]')
        .should('have.prop', 'value', '60')
      
      //Exit Settings Pop-up
      cy.get('button.closePopup').click()
    })

    cy.get('#popup')
      .invoke('attr', 'style')
      .should('include', 'none')
  })
}

function testDarkMode(url){
  it('Dark Mode', () => {
    cy.visit(url)

    //Click Settings
    cy.get('img.settings-icon')
      .click()
    cy.get('#popup')
      .invoke('attr', 'style')
      .should('not.include', 'none')
    
    //Check functions of Dark Mode button
    cy.get('input[id="dark-mode-checkbox"]')
      .should('have.prop', 'checked', false)
    cy.get('input[id="dark-mode-checkbox"]')
      .check()
    cy.document().its('body')
      .should('have.class', 'dark-class')

    //Exit Settings
    cy.get('button.closePopup').click()

    //Check other page is also in Dark Mode
    cy.url({timeout : 10000}).then(($url) => {
      if($url.includes('StartScreen')){
        cy.get('#start').click()
        cy.url()
          .should('eq', 'https://cse110-sp23-group29.github.io/BlueScreen.html?darkMode=true')
        cy.document().its('body')
          .should('have.class', 'dark-class')
      }else{
        cy.get('#arrow').click()
        cy.url()
          .should('eq', 'https://cse110-sp23-group29.github.io/StartScreen.html')
        cy.document().its('body')
          .should('have.class', 'dark-class')
        }
    })
  })
}