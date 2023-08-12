

describe('My suit file', () => {

    it('Mg login Data drivern test', () => {

        cy.fixture("mglogin.json").then((data) => {
            cy.visit("https://stage.mgreassure.com/")
            data.forEach((userdata) => {

                cy.get("[placeholder='Mobilenumber']").click().type(userdata.login);
                cy.wait(10000);
                cy.get('#submit_btn').click();
                cy.get("[placeholder='Mobilenumber']")
                cy.wait(3000);
                if (userdata.login == '8125555655') {

                    cy.get("[placeholder='Enter OTP']").type('110323');
                    cy.wait(2000)
                    cy.get('#submit_btn2').click();
                    cy.get('.welcome').should('have.text', userdata.expected)
                    cy.wait(5000)
                    cy.get('.btns2 > .icn_bg').click()
                }
                else {
                    cy.get('.alert').should('have.text', userdata.expected)


                }


            })



        })



    })





})