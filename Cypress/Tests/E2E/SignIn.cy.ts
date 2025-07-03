import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {SignInSelectors} from "../../Fixtures/Selectors/SignInSelectors";


describe('Sign in Pcassa', () => {

  context('Negative cases', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Should check sign in with empty fields', () => {
      SignInMethods.SignIn(" ", " ")
      SignInSelectors.emptyFieldErrorMessage().should('have.length', 2)
    })
    it('Should check sign in without username', () => {
      SignInMethods.SignIn("", SignInGenerators.User4004.password)
      SignInSelectors.emptyFieldErrorMessage().should('have.length', 1)
    })
    it('Should check sign in without password', () => {
      SignInMethods.SignIn(SignInGenerators.User4004.username, " ")
      SignInSelectors.emptyFieldErrorMessage().should('have.length', 1)
    })
    it('Should check sign in with wrong username', () => {
      SignInMethods.SignIn(SignInGenerators.WrongUser.username, SignInGenerators.WrongUser.password)
      SignInSelectors.wrongCredentialsErrorMessage().should('be.visible')
    })
  })
  context('Positive cases', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Should check language change work', () => {
      SignInSelectors.signInTitle().should('have.text', 'Մուտք')
      SignInSelectors.languageButton().click()
      SignInSelectors.languageDropdown().should('be.visible')
      SignInSelectors.englishLanguage().click()
      SignInSelectors.signInTitle().should('have.text', 'Login')
      SignInSelectors.languageButton().click()
      SignInSelectors.languageDropdown().should('be.visible')
      SignInSelectors.russianLanguage().click()
      SignInSelectors.signInTitle().should('have.text', 'Логин')
    })
    it('Should open pcassa am for free trial', () => {
      cy.get('a[href="https://pcassa.am"]')
          .invoke('removeAttr', 'target')
          .click()
      cy.origin('https://www.pcassa.am', () => {
        cy.url().should('include', 'www.pcassa.am')
      })
    })
    it('Should sign in', () => {
      SignInMethods.SignIn(SignInGenerators.User4004.username,SignInGenerators.User4004.password)
    })
  })
})
