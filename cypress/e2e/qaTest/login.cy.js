import loginPage from "../pages/login.page";

describe ("Login", ()=> {
    before(()=> {
        cy.fixture ('testUsers.json').then((data)=>{
            this.user_01_01= data ['01.01']
        })
    })

    it('Login via Username & Password', ()=> {
        loginPage.clickRegister()
    })
})