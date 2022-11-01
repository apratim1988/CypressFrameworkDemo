class PolicyDetailsPage
{

selectOneYearPremium()
{
    return cy.get('.bg-blue > h4')
}

clickNext()
{
    return cy.get('.next > .ng-star-inserted')
}
}

export default PolicyDetailsPage;