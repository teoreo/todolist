

//UI testing 

//mocha syntax 
//valfri testrubik som beskriver att detta är en samling av test för din app/sida
describe('UI tests for Todo app', ()=>{
    it('Visit starting page for app', () => {
        cy.visit('http://localhost:8002/todo')
        
        //kolla om en länk/knapp finns
        //klicka på den
        
        //kolla att vi hamnar på rätt sökväg - /update
        it('Should add an todo item and then delete it')
    cy.get('#todo').type('Skriva en todo')
    cy.get('#done').type('2020-02-14')
    cy.get('#addToList').click()
    cy.get('#four').click()
    cy.get('#todo').type('Skriva en todo till')
    cy.get('#done').type('2020-02-15')
    cy.get('#addToList').click()
    cy.get('#sort > a:nth-child(2)').click()
    cy.get('#four').each(()=>{
        cy.get('#four').first().click()
    })
    })
    
})