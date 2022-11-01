class HomePage

{

getHealthOption()
{
    return cy.get(':nth-child(1) > .process > p')
}

getTwoWheelerOption()
{
    return cy.get(':nth-child(3) > .process > p')
}

getFourWheelerOption()
{
    return cy.get(':nth-child(2) > .process > p')
}

}

export default HomePage;