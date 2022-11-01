class HealthInsurancePage
{
inputPinCode()
{
    return cy.get('input[placeholder="Where do you stay"]')
}

inputSumValue()
{
    return cy.get('select').select('500000')
}

inputMobileNo()
{
    return cy.get('input[placeholder="How do we reach you"]')
}


clickNext1()
{
    return cy.get('.t-center-mob > .mat-icon')
}

selectInsured()
{
   return cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container')
}

inputAge()
{
    return cy.get('input[placeholder="Enter Age"]')
}

clickNext2()
{
    return cy.get('.mat-icon')
}

}

export default HealthInsurancePage;