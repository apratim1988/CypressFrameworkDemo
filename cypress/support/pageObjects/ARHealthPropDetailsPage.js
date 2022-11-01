class ProposerDetailsPage
{

inputFirstName()
{
    return cy.get('input[formcontrolname="first_name"]')
}

inputLastName()
{
    return cy.get('input[formcontrolname="last_name"]')
}

inputDOB()
{
    return cy.get('input[formcontrolname="dob"]')
}

selectGender()
{
    return cy.get('cy.get("#mat-radio-2 > .mat-radio-label > .mat-radio-label-content")')
}

inputAnnualIncome()
{
    return cy.get('input[formcontrolname="annul_income"]')
}

inputPANCardNumber()
{
    return cy.get('input[formcontrolname="pan_number"]')
}

clickOccupationDropdown()
{
    return cy.get('mat-select[formcontrolname="occupation"]')
}

selectOccupation()
{
    return cy.get('#mat-option-0 > .mat-option-text')
}

inputDesignation()
{
    return cy.get('#mat-input-15')
}

inputBusinessOccupation()
{
    return cy.get('input[formcontrolname="business_occupation"]')
}

clickMaritalStatusDropdown()
{
    return cy.get('mat-select[formcontrolname="marital_status"]')
}

selectMaritalStatus()
{
    return cy.get('#mat-option-6 > .mat-option-text')
}

clickEduQualificationDropdown()
{
    return cy.get('mat-select[formcontrolname="educational_qualification"]')
}

selectEduQualification()
{
    return cy.get('#mat-option-10 > .mat-option-text')
}

clickTPANameDropdown()
{
    return cy.get('mat-select[formcontrolname="tpa_name"]')
}

selectTPAName()
{
    return cy.get('#mat-option-13 > .mat-option-text')
}

inputAddress1()
{
    return cy.get('input[formcontrolname="building_name"]')
}

inputAddress2()
{
    return cy.get('input[formcontrolname="area"]')
}

clickNext1()
{
    return cy.contains('Next')
}

inputHeight()
{
    return cy.get('input[formcontrolname="height"]')
}

inputWeight()
{
    return cy.get('input[formcontrolname="weight"]')
}

inputNomineeFirstName()
{
    return cy.get('input[formcontrolname="nominee_first_name"]')
}

inputNomineeLastName()
{
    return cy.get('input[formcontrolname="nominee_last_name"]')
}

inputNomineeDOB()
{
    return cy.get('input[formcontrolname="nominee_dob"]')
}

clickNomineeGender()
{
    return cy.get('#mat-radio-6 > .mat-radio-label > .mat-radio-label-content')
}

clickNomineeRelationDropdown()
{
    return cy.get('mat-select[formcontrolname="nominee_relation"]')
}

selectRelation()
{
    return cy.get('#mat-option-37 > .mat-option-text')
}

clickNext2()
{
    return cy.contains('Next')
}

}

export default ProposerDetailsPage;