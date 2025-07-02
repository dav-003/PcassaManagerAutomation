import {SignInMethods} from "../../Fixtures/Methods/SignInMethods";
import {SignInGenerators} from "../../Fixtures/Generators/SignInGenerators";
import {SignInSelectors} from "../../Fixtures/Selectors/SignInSelectors";


describe('Sign in Pcassa', () => {

  context.only('Negative cases', () => {
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
    it('Should sign in', () => {
      SignInMethods.SignIn(SignInGenerators.User4004.username,SignInGenerators.User4004.password)
    })
  })
})
