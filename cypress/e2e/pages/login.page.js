const clickRegister = () => {
    cy.get('a[href="/register"]').click()
}

const loginPage = {clickRegister}
export default loginPage