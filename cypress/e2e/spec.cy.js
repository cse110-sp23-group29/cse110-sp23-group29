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

describe('StartScreen.html', () => {
  //Visit Start Screen
  it('Visit', () => {
    cy.visit('https://cse110-sp23-group29.github.io/StartScreen.html')
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
  })

  //Test Settings functions
  testSettings('https://cse110-sp23-group29.github.io/BlueScreen.html')

  //Test Dark Mode
  //testDarkMode('https://cse110-sp23-group29.github.io/BlueScreen.html')
})

describe('Card Testing', () => {
  it('Visit', () => {
    //Visit Blue Screen
    cy.visit('https://cse110-sp23-group29.github.io/BlueScreen.html')
  })

  it('Query and Flip All Cards x10', () => {
    cy.visit('https://cse110-sp23-group29.github.io/BlueScreen.html')

    for(let i = 0; i < 10; i++){
      testCards('Test Query ' + (i + 1))
    }
  })
})

function testCards(query){
  //Enter query
  cy.get('input[placeholder="Enter a sentence"]')
    .type(query)

  //Press Submit
  cy.get('button.submit-btn').click()

  //Click each card
  //CARD 1
  cy.get('#past-card').click()
  cy.get('#card1')
    .should('have.class', 'card')
    .click()
    .should('have.class', 'flipped')
    .within(() => {
      cy.get('div.card-back')
        .invoke('attr', 'style')
        .should('include', '/specs/images/image')
        .then(($style) => {
          console.log($style.substring($style.indexOf('images/image') + 12, $style.indexOf('.png')))
        })
    })
  cy.get('#modal1').within(() => {
    cy.get('span.close').click()
  })
  cy.get('#card1')
  .should('not.have.class', 'flipped')

  //CARD 2
  cy.get('#present-card').click()
  cy.get('#card2')
    .should('have.class', 'card')
    .click()
    .should('have.class', 'flipped')
    .within(() => {
      cy.get('div.card-back')
        .invoke('attr', 'style')
        .should('include', '/specs/images/image')
        .then(($style) => {
          console.log($style.substring($style.indexOf('images/image') + 12, $style.indexOf('.png')))
        })
    })
  cy.get('#modal2').within(() => {
    cy.get('span.close').click()
  })
  cy.get('#card2')
  .should('not.have.class', 'flipped')

  //CARD 3
  cy.get('#future-card').click()
  cy.get('#card3')
    .should('have.class', 'card')
    .click()
    .should('have.class', 'flipped')
    .within(() => {
      cy.get('div.card-back')
        .invoke('attr', 'style')
        .should('include', '/specs/images/image')
        .then(($style) => {
          console.log($style.substring($style.indexOf('images/image') + 12, $style.indexOf('.png')))
        })
    })
  cy.get('#modal3').within(() => {
    cy.get('span.close').click()
  })
  cy.get('#card3')
  .should('not.have.class', 'flipped')      

  cy.get('button.refresh-btn').click()
}

function testSettings(url){
  it('Settings', () => {
    cy.visit(url)

    //Click Settings
    cy.get('#settings')
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
      
      //Check functions of Language dropdown

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
    cy.get('#settings')
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
          .should('eq', 'https://cse110-sp23-group29.github.io/StartScreen.html?darkMode=true')
        cy.document().its('body')
          .should('have.class', 'dark-class')
        }
    })
  })
}

    
    /*
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
    */