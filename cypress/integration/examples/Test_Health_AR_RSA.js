/// <reference types="cypress" />

// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
// })


import HomePage from '../../support/pageObjects/ARHomePage'
import HealthInsurancePage from '../../support/pageObjects/ARHealthInsurancePage'
import QuotesPage from '../../support/pageObjects/ARHealthQuotesPage'
import PolicyDetailsPage from '../../support/pageObjects/ARHealthPolicyDetailsPage'
import ProposerDetailsPage from '../../support/pageObjects/ARHealthPropDetailsPage'
import PolicyReviewPage from '../../support/pageObjects/ARHealthPolicyReviewPage'
import QuestionarriesPage from '../../support/pageObjects/ARHealthQuestionariesPage'

describe('AnandRathi Health',function()
{
    before(function() {
        cy.fixture('ARHealth').then(function(testdata) 
           {
this.testdata = testdata
        })   

   })

it('AnandRathi RSA Health',async function(){
cy.Login().then(function(){
}) 
const homePage = new HomePage()
const healthInsurancePage = new HealthInsurancePage()
const quotesPage = new QuotesPage()
const policyDetailsPage = new PolicyDetailsPage()
const proposerDetailsPage = new ProposerDetailsPage()
const questionarries = new QuestionarriesPage()
const policyReviewPage = new PolicyReviewPage()
homePage.getHealthOption().click()
healthInsurancePage.inputPinCode().type(this.testdata.pin)
cy.get('select').select(this.testdata.sum)
// healthInsurancePage.inputSumValue()
healthInsurancePage.inputMobileNo().type(this.testdata.mobileno)
healthInsurancePage.clickNext1().click()
healthInsurancePage.selectInsured().click()
healthInsurancePage.inputAge().type(this.testdata.selfage)
cy.wait(2000)
healthInsurancePage.clickNext2().click()
cy.wait(10000)
quotesPage.clickShareQuotesButton().click()
quotesPage.clickSelectAllCheckbox().click()
quotesPage.clickNext1().click()
quotesPage.inputSenderName().type(this.testdata.fullname)
quotesPage.inputEmail().type(this.testdata.email)
quotesPage.inputMobileNumber().type(this.testdata.mobileno)
quotesPage.clickShareNow().click()
cy.wait(5000)
quotesPage.cliclBacktoQuotes().click()
quotesPage.selectPlanRSALifeLineSupreme().click()
policyDetailsPage.selectOneYearPremium().click()
policyDetailsPage.clickNext().click()
proposerDetailsPage.inputFirstName().type(this.testdata.firstname)
proposerDetailsPage.inputLastName().type(this.testdata.lastname)
proposerDetailsPage.inputDOB().type(this.testdata.dob)
// proposerDetailsPage.selectGender().click
proposerDetailsPage.inputAnnualIncome().type(this.testdata.income)
proposerDetailsPage.inputPANCardNumber().type(this.testdata.pan)
proposerDetailsPage.clickOccupationDropdown().click()
proposerDetailsPage.selectOccupation().click()
proposerDetailsPage.inputDesignation().type(this.testdata.designation)
proposerDetailsPage.inputBusinessOccupation().type(this.testdata.businessoccupation)
proposerDetailsPage.clickMaritalStatusDropdown().click()
proposerDetailsPage.selectMaritalStatus().click()
proposerDetailsPage.clickEduQualificationDropdown().click()
proposerDetailsPage.selectEduQualification().click()
proposerDetailsPage.clickTPANameDropdown().click()
proposerDetailsPage.selectTPAName().click()
proposerDetailsPage.inputAddress1().type(this.testdata.add1)
proposerDetailsPage.inputAddress2().type(this.testdata.add2)
proposerDetailsPage.clickNext1().click()
cy.wait(3000)
proposerDetailsPage.inputHeight().type(this.testdata.height)
proposerDetailsPage.inputWeight().type(this.testdata.weight)
proposerDetailsPage.inputNomineeFirstName().type(this.testdata.nomfirstname)
proposerDetailsPage.inputNomineeLastName().type(this.testdata.nomlastname)
proposerDetailsPage.inputNomineeDOB().type(this.testdata.nomdob)
proposerDetailsPage.clickNomineeGender().click()
proposerDetailsPage.clickNomineeRelationDropdown().click()
proposerDetailsPage.selectRelation().click()
cy.wait(2000)
proposerDetailsPage.clickNext2().click()
cy.wait(10000)
questionarries.clickNext().click()
cy.wait(10000)
policyReviewPage.clickSendToCustomer().click()




    })

})



