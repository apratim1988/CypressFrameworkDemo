class QuotesPage
{

clickShareQuotesButton()
{
    return cy.get('.btn')
}

clickSelectAllCheckbox()
{
    return cy.get('#selectAll')
}

clickNext1()
{
    return cy.get('button[class="btn custom-btn"]')
}

inputSenderName()
{
    return cy.get('input[name="name"]')
}

inputEmail()
{
    return cy.get('input[name="email"]')
}

inputMobileNumber()
{
    return cy.get('input[name="mobile"]')
}

clickShareNow()
{
    return cy.get('button[type="submit"]')
}

cliclBacktoQuotes()
{
    return cy.get('button[class="btn btn-sty"]')
}

selectPlanRSALifeLineSupreme()
{
    return cy.xpath('//*[@class="outer outer-min-height"]//*[contains(@src,"royal_sundaram")]//ancestor::div[@style="flex-direction: row; box-sizing: border-box; display: flex;"]//div//button')
}

}

export default QuotesPage;